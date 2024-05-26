using System.Text;
using MongoDB.Bson;
using MongoDB.Driver;
using Newtonsoft.Json;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

using CMS.Models;
using CMS.Helpers;
using CMS.Database;

namespace CMS.Services
{
    public class AuthJwtSvc : IAuthJwtSvc
    {
        // Configuration
        private readonly AuthJwtSetting _authJwtSetting;

        // Database
        private readonly IUserDb _userDb;
        private readonly IAccountDb _accountDb;

        // Serivce
        private readonly IMailSvc _mailSvc;
        private readonly IRedisSvc _redisSvc;
        private readonly IMongoContextSvc _mongoContextSvc;

        // Log
        private readonly ILogger<AuthJwtSvc> _logger;

        public AuthJwtSvc(
            IOptions<AuthJwtSetting> authJwtSetting,
            IUserDb userDb, IAccountDb accountDb,
            IMongoContextSvc mongoContextSvc, IRedisSvc redisSvc, IMailSvc mailSvc,
            ILogger<AuthJwtSvc> logger
        )
        {
            // Configuration
            _authJwtSetting = authJwtSetting.Value;

            // Database
            _userDb = userDb;
            _accountDb = accountDb;

            // Serivce
            _mailSvc = mailSvc;
            _redisSvc = redisSvc;
            _mongoContextSvc = mongoContextSvc;

            // Log
            _logger = logger;
        }

        public async Task<BaseResponse<string>> RegisterAsync(RegisterAccountRequest data)
        {
            var baseResponse = new BaseResponse<string>();

            try
            {
                // Check email is used
                var filter = Builders<UserModel>.Filter.Eq(x => x.Email, data.Email);
                var user = await _userDb.FindAsync(filter);

                if (user != null)
                {
                    baseResponse.Status = StatusCodes.Status400BadRequest;
                    baseResponse.Message = "Email đã được sử dụng";
                    return baseResponse;
                }

                // Create register id
                var registerId = ObjectId.GenerateNewId();

                // Create mail data
                string verifyEmailUrl = $"https://ecommerce-kienntcoders-projects.vercel.app/xac-thuc-email?registerId={registerId}";
                string filePath = Directory.GetCurrentDirectory() + "\\Templates\\Mail\\VerifyEmail.html";
                string fileText = File.ReadAllText(filePath);
                fileText = string.Format(fileText, data.Username, verifyEmailUrl, verifyEmailUrl);

                var mailData = new MailData
                {
                    ToEmail = data.Email,
                    Subject = "Xác nhận đăng ký tài khoản",
                    Body = fileText,
                };

                // Cache data to redis
                await _redisSvc.SetAsync(registerId.ToString(), JsonConvert.SerializeObject(data), TimeSpan.FromDays(1));

                // Send mail to verify email registered
                await _mailSvc.SendAsync(mailData);

                // response successfully
                baseResponse.Status = StatusCodes.Status201Created;
                baseResponse.Message = "Đăng ký tài khoản thành công. Vui vòng xác nhận thông tin đăng ký trong email!";
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                baseResponse.Status = StatusCodes.Status500InternalServerError;
                baseResponse.Message = "Xảy ra lỗi trong quá trình đăng ký tài khoản";
                return baseResponse;
            }

            return baseResponse;
        }

        public async Task<BaseResponse<LoginAccountResponse>> LoginAsync(LoginAccountRequest data)
        {
            var baseResponse = new BaseResponse<LoginAccountResponse>();
            var loginAccountResponse = new LoginAccountResponse();

            try
            {
                var userFilter = Builders<UserModel>.Filter.Eq(x => x.Email, data.Email);
                var user = await _userDb.FindAsync(userFilter);

                if (user == null)
                {
                    baseResponse.Status = StatusCodes.Status400BadRequest;
                    baseResponse.Message = "Email không tồn tại";
                    return baseResponse;
                }

                var accountFilter = Builders<AccountModel>.Filter.Eq(x => x.UserId, user.Id);
                var account = await _accountDb.FindAsync(accountFilter);

                if (account == null)
                {
                    baseResponse.Status = StatusCodes.Status400BadRequest;
                    baseResponse.Message = "Email chưa đăng ký";
                    return baseResponse;
                }

                var isPasswordValid = HashPassword.Validate(data.Password!, account.Password!);

                if (!isPasswordValid)
                {
                    baseResponse.Status = StatusCodes.Status400BadRequest;
                    baseResponse.Message = "Mật khẩu không chính xác";
                    return baseResponse;
                }

                var claims = new List<Claim> {
                    new Claim("Id", account.Id!),
                    new Claim("Email", user.Email!),
                    new Claim("Username", account.Username!),
                    new Claim(JwtRegisteredClaimNames.Sub, _authJwtSetting.Subject!),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                };

                // Create refresh token
                var refreshToken = GenerateRefreshToken();

                // Create token and refresh token expired
                var tokenExpired = DateTime.UtcNow.AddMinutes(_authJwtSetting.TokenValidityInMinutes);
                var refreshTokenExpired = DateTime.UtcNow.AddDays(_authJwtSetting.RefreshTokenValidityInDays);

                // Update account
                var accountUpdated = Builders<AccountModel>.Update.Set(x => x.UpdatedAt, DateTime.UtcNow);
                accountUpdated = accountUpdated.Set(x => x.RefreshToken, refreshToken);
                accountUpdated = accountUpdated.Set(x => x.RefreshTokenExpired, refreshTokenExpired);

                await _accountDb.UpdateAsync(account.Id!, accountUpdated);

                // Create response data
                loginAccountResponse.Account = account;
                loginAccountResponse.Auth = new RefreshTokenResponse
                {
                    Token = GenerateToken(claims, tokenExpired),
                    TokenExpired = ((DateTimeOffset)tokenExpired).ToUnixTimeMilliseconds(),
                    RefreshToken = refreshToken,
                    RefreshTokenExpired = ((DateTimeOffset)refreshTokenExpired).ToUnixTimeMilliseconds(),
                };

                baseResponse.Data = loginAccountResponse;
                baseResponse.Message = "Đăng nhập thành công";
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                baseResponse.Status = StatusCodes.Status500InternalServerError;
                baseResponse.Message = "Xảy ra lỗi trong quá trình đăng nhập";
                return baseResponse;
            }

            return baseResponse;
        }

        public async Task<BaseResponse<RefreshTokenResponse>> RefreshTokenAsync(RefreshTokenRequest data)
        {
            var baseResponse = new BaseResponse<RefreshTokenResponse>();

            try
            {
                var principal = GetPrincipalFromExpiredToken(data.Token!);

                if (principal == null)
                {
                    baseResponse.Status = StatusCodes.Status400BadRequest;
                    baseResponse.Message = "Token không hợp lệ";
                    return baseResponse;
                }

                var accountId = principal.Claims.Where(p => p.Type == "Id").FirstOrDefault()!.Value;

                var filter = Builders<AccountModel>.Filter.Eq(x => x.Id, accountId);

                var account = await _accountDb.FindAsync(filter);

                if (account == null || account.RefreshToken != data.RefreshToken || account.RefreshTokenExpired <= DateTime.UtcNow)
                {
                    baseResponse.Status = StatusCodes.Status400BadRequest;
                    baseResponse.Message = "RefreshToken không hợp lệ";
                    return baseResponse;
                }

                // Create refresh token
                var newRefreshToken = GenerateRefreshToken();

                // Create token and refresh token expired
                var newTokenExpired = DateTime.UtcNow.AddMinutes(_authJwtSetting.TokenValidityInMinutes);
                var newRefreshTokenExpired = DateTime.UtcNow.AddDays(_authJwtSetting.RefreshTokenValidityInDays);

                // Update Account
                var accountUpdated = Builders<AccountModel>.Update.Set(x => x.UpdatedAt, DateTime.UtcNow);
                accountUpdated = accountUpdated.Set(x => x.RefreshToken, newRefreshToken);
                accountUpdated = accountUpdated.Set(x => x.RefreshTokenExpired, newRefreshTokenExpired);

                await _accountDb.UpdateAsync(account.Id!, accountUpdated);

                // Create response data
                var refreshTokenResponse = new RefreshTokenResponse
                {
                    Token = GenerateToken(principal.Claims.ToList(), newTokenExpired),
                    TokenExpired = ((DateTimeOffset)newTokenExpired).ToUnixTimeMilliseconds(),
                    RefreshToken = newRefreshToken,
                    RefreshTokenExpired = ((DateTimeOffset)newRefreshTokenExpired).ToUnixTimeMilliseconds(),
                };


                baseResponse.Data = refreshTokenResponse;
                baseResponse.Message = "Làm mới token thành công";
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                baseResponse.Status = StatusCodes.Status500InternalServerError;
                baseResponse.Message = "Xảy ra lỗi trong quá trình làm mới token";
                return baseResponse;
            }


            return baseResponse;
        }

        public async Task<BaseResponse<string>> VefifyEmailAsync(string registerId)
        {
            var baseResponse = new BaseResponse<string>();

            using var session = await _mongoContextSvc.MongoClient.StartSessionAsync();

            session.StartTransaction();

            try
            {
                // Get data from redis cache
                var registerCache = await _redisSvc.GetAsync(registerId);

                // Return when register cache is null
                if (registerCache == null)
                {
                    baseResponse.Status = StatusCodes.Status400BadRequest;
                    baseResponse.Message = "Thông tin đăng ký tài khoản không tồn tại!";
                    return baseResponse;
                }

                // Convert json to object format
                var data = JsonConvert.DeserializeObject<RegisterAccountRequest>(registerCache);

                // Return when data is nullable
                if (data == null)
                {
                    baseResponse.Status = StatusCodes.Status400BadRequest;
                    baseResponse.Message = "Thông tin đăng ký tài khoản không hợp lệ!";
                    return baseResponse;
                }

                // Create user model
                var user = new UserModel
                {
                    Email = data.Email,
                };

                // Add user into database
                await _userDb.AddAsync(user, session);

                // Create account model
                var account = new AccountModel
                {
                    UserId = user.Id,
                    Username = data.Username,
                    Password = HashPassword.Hash(data.Password!),
                    IsVerify = true
                };

                // Add account into database
                await _accountDb.AddAsync(account, session);

                await session.CommitTransactionAsync();

                // Remove register cache
                bool isRemoveSuccess = await _redisSvc.RemoveAsync(registerId);
                if (!isRemoveSuccess)
                {
                    baseResponse.Status = StatusCodes.Status500InternalServerError;
                    baseResponse.Message = "Xảy ra lỗi trong quá trình xoá thông tin đăng ký tài khoản tạm thời";
                    return baseResponse;
                }

                baseResponse.Message = "Xác nhận email thành công";
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

                await session.AbortTransactionAsync();

                baseResponse.Status = StatusCodes.Status500InternalServerError;
                baseResponse.Message = "Xảy ra lỗi trong quá trình xác nhận email";

                return baseResponse;
            }

            return baseResponse;
        }

        private string? GenerateToken(List<Claim> claims, DateTime expire)
        {
            string? token = null;
            try
            {
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authJwtSetting.Secret!));
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Issuer = _authJwtSetting.Issuer,
                    Audience = _authJwtSetting.Audience,
                    Subject = new ClaimsIdentity(claims),
                    Expires = expire,
                    SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenCreated = tokenHandler.CreateToken(tokenDescriptor);
                token = tokenHandler.WriteToken(tokenCreated);

                return token;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return token;
            }

        }

        private string GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(randomNumber);
            return Convert.ToBase64String(randomNumber);
        }

        private ClaimsPrincipal? GetPrincipalFromExpiredToken(string token)
        {
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateAudience = true,
                ValidateIssuer = true,
                ValidateLifetime = false,
                ValidateIssuerSigningKey = true,
                ValidAudience = _authJwtSetting.Audience,
                ValidIssuer = _authJwtSetting.Issuer,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authJwtSetting.Secret!))
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken securityToken;
            var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out securityToken);
            var jwtSecurityToken = securityToken as JwtSecurityToken;
            if (jwtSecurityToken == null || !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
                principal = null;

            return principal;
        }
    }
}