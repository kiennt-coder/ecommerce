

namespace CMS.Models
{
    public class LoginAccountRequest
    {
        public string? Email { get; set; }
        public string? Password { get; set; }
    }

    public class LoginAccountResponse
    {
        public AccountModel? Account { get; set; }

        public RefreshTokenResponse? Auth { get; set; }
    }
}