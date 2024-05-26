using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CMS.Models
{
    public class AccountModel
    {
        // Id
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        // Username
        public string? Username { get; set; }

        [JsonIgnore]
        // Password
        public string? Password { get; set; }

        // Avatar
        public string? Avatar { get; set; }

        // Active
        public bool? IsActive { get; set; } = true;

        // Verify
        public bool? IsVerify { get; set; } = false;

        // Refresh token
        [JsonIgnore]
        public string? RefreshToken { get; set; }

        // Refresh token expired
        [JsonIgnore]
        public DateTime? RefreshTokenExpired { get; set; }

        // profile
        [BsonRepresentation(BsonType.ObjectId)]
        public string? UserId { get; set; }

        // Created at
        [BsonRepresentation(BsonType.DateTime)]
        public DateTime? CreatedAt { get; set; } = DateTime.UtcNow;

        // Updated at
        [BsonRepresentation(BsonType.DateTime)]
        public DateTime? UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}