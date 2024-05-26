

namespace CMS.Models
{
    public class RegisterAccountRequest
    {
        // Email address
        public string? Email { get; set; }

        // Username
        public string? Username { get; set; }

        // Password
        public string? Password { get; set; }
    }
}