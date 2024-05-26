using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;

using CMS.Common;
using CMS.Models;
using CMS.Services;
using CMS.Helpers;

namespace CMS.Controllers
{
    [ApiController]
    [Route("v1/[controller]")]
    public class AuthController : ControllerBase
    {
        // Services
        private readonly IAuthJwtSvc _authJwtSvc;

        public AuthController(IAuthJwtSvc authJwtSvc)
        {
            _authJwtSvc = authJwtSvc;
        }

        // Register a new account with user
        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegisterAccountRequest? data)
        {
            var baseResponse = new BaseResponse<string>();

            if (data == null)
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Dữ liệu đăng nhập không hợp lệ!";
                return BadRequest(baseResponse);
            }

            // Return when email is null or empty
            if (string.IsNullOrEmpty(data.Email))
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Email không được để trống";

                return BadRequest(baseResponse);
            }

            bool isEmail = Regex.Match(data.Email, RegularExpression.EmailPattern).Success;

            // Return when email wrong format
            if (!isEmail)
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Email không hợp lệ";

                return BadRequest(baseResponse);
            }

            // Generate username when value is null or empty
            if (string.IsNullOrEmpty(data.Username))
            {
                data.Username = GenerateUsername.Generate();
            }
            else
            {
                // Return when username wrong format
                bool isUsername = Regex.Match(data.Username, RegularExpression.UsernamePattern).Success;

                if (!isUsername)
                {
                    baseResponse.Status = StatusCodes.Status400BadRequest;
                    baseResponse.Message = "Tên tài khoản không hợp lệ";

                    return BadRequest(baseResponse);
                }
            }


            // Return when password is null or empty
            if (string.IsNullOrEmpty(data.Password))
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Mật khẩu không được để trống";

                return BadRequest(baseResponse);
            }

            bool isPassword = Regex.Match(data.Password, RegularExpression.PasswordPattern).Success;

            // Return when password wrong format
            if (!isPassword)
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Mật khẩu không hợp lệ";

                return BadRequest(baseResponse);
            }

            baseResponse = await _authJwtSvc.RegisterAsync(data);

            return StatusCode(baseResponse.Status, baseResponse);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginAccountRequest? data)
        {
            var baseResponse = new BaseResponse<LoginAccountResponse>();

            if (data == null)
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Dữ liệu đăng nhập không hợp lệ!";
                return BadRequest(baseResponse); ;
            }

            if (string.IsNullOrEmpty(data.Email))
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Email không được để trống!";
                return BadRequest(baseResponse);
            }

            bool isEmail = Regex.Match(data.Email, RegularExpression.EmailPattern).Success;

            // Return when email wrong format
            if (!isEmail)
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Email không hợp lệ";

                return BadRequest(baseResponse);
            }

            baseResponse = await _authJwtSvc.LoginAsync(data);

            return StatusCode(baseResponse.Status, baseResponse);
        }

        [HttpPost("VerifyEmail")]
        public async Task<IActionResult> Password(string? registerId)
        {
            var baseResponse = new BaseResponse<string>();

            if (string.IsNullOrEmpty(registerId))
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Mã đăng ký không hợp lệ!";
                return BadRequest(baseResponse);
            }

            baseResponse = await _authJwtSvc.VefifyEmailAsync(registerId);

            return StatusCode(baseResponse.Status, baseResponse);
        }

        [HttpPost("refreshToken")]
        public async Task<IActionResult> RefreshToken(RefreshTokenRequest? data)
        {
            var baseResponse = new BaseResponse<RefreshTokenResponse>();

            if (data == null)
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Dữ liệu không hợp lệ!";
                return BadRequest(baseResponse);
            }

            if (string.IsNullOrEmpty(data.Token))
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Token không hợp lệ!";
                return BadRequest(baseResponse);
            }

            if (string.IsNullOrEmpty(data.RefreshToken))
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "RefreshToken không hợp lệ!";
                return BadRequest(baseResponse);
            }

            baseResponse = await _authJwtSvc.RefreshTokenAsync(data);

            return StatusCode(baseResponse.Status, baseResponse);

        }
    }
}