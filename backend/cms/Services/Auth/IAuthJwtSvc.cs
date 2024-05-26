

using CMS.Models;

namespace CMS.Services
{
    public interface IAuthJwtSvc
    {
        Task<BaseResponse<string>> RegisterAsync(RegisterAccountRequest data);

        Task<BaseResponse<LoginAccountResponse>> LoginAsync(LoginAccountRequest data);

        Task<BaseResponse<string>> VefifyEmailAsync(string registerId);

        Task<BaseResponse<RefreshTokenResponse>> RefreshTokenAsync(RefreshTokenRequest data);
    }
}