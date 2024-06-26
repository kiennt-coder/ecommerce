

namespace CMS.Models
{
    public class MailSetting
    {
        public string? Host { get; set; }

        public int Port { get; set; }

        public string? UserName { get; set; }

        public string? Password { get; set; }

        public bool EnableSSL { get; set; }
    }
}