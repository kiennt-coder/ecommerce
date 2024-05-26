

namespace CMS.Models
{
    public class RefreshTokenRequest
    {
        public string? Token { get; set; }

        public string? RefreshToken { get; set; }
    }

    public class RefreshTokenResponse
    {
        public string? Token { get; set; }
        public long? TokenExpired { get; set; }
        public string? RefreshToken { get; set; }
        public long? RefreshTokenExpired { get; set; }
    }
}