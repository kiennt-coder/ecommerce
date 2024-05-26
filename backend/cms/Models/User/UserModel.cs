

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CMS.Models
{
    public class UserModel
    {
        // Id
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        // First Name
        public string? FirstName { get; set; }

        // Last Name
        public string? LastName { get; set; }

        // Gender
        public string? Gender { get; set; }

        // Birthday
        [BsonRepresentation(BsonType.DateTime)]
        public DateTime? Birthday { get; set; }

        // Email
        public string? Email { get; set; }

        // Phone Number
        public string? PhoneNumber { get; set; }

        // Address Id
        [BsonRepresentation(BsonType.ObjectId)]
        public string? AddressId { get; set; }

        // Created at
        [BsonRepresentation(BsonType.DateTime)]
        public DateTime? CreatedAt { get; set; } = DateTime.UtcNow;

        // Updated at
        [BsonRepresentation(BsonType.DateTime)]
        public DateTime? UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}