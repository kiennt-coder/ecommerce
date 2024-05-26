
namespace CMS.Models
{
    public class AuthJwtSetting
    {
        public string? Domain { get; set; }

        public string? Audience { get; set; }

        public string? Issuer { get; set; }

        public string? Secret { get; set; }

        public string? Subject { get; set; }

        public int TokenValidityInMinutes { get; set; }

        public int RefreshTokenValidityInDays { get; set; }
    }
}