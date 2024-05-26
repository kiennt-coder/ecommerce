

namespace CMS.Models
{
    public class MongoDbSetting
    {
        // Connection string
        public string? ConnectionString { get; set; }

        // Database name
        public string? DatabaseName { get; set; }

        // Account collection
        public string? AccountCollection { get; set; }

        // User collection
        public string? UserCollection { get; set; }

    }
}