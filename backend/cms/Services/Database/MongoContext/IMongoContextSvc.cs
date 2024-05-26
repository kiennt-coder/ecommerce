
using MongoDB.Driver;

using CMS.Models;

namespace CMS.Services
{
    public interface IMongoContextSvc
    {
        // Mongo client
        IMongoClient MongoClient { get; }

        // Mongo database
        IMongoDatabase MongoDatabase { get; }

        // Account collection
        IMongoCollection<AccountModel> AccountCollection { get; }

        // User collection
        IMongoCollection<UserModel> UserCollection { get; }
    }
}