

namespace CMS.Models
{
    public class RedisSetting
    {
        // Host name
        public string? Host { get; set; }

        // Port number
        public int Port { get; set; }

        // Username
        public string? Username { get; set; }

        // Password
        public string? Password { get; set; }

        // Enabled
        public bool Enabled { get; set; }
    }
}