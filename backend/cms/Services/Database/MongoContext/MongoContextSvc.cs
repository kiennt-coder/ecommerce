

using MongoDB.Driver;
using Microsoft.Extensions.Options;

using CMS.Models;

namespace CMS.Services
{
    public class MongoContextSvc : IMongoContextSvc
    {
        // Mongo client
        private readonly IMongoClient _mongoClient;
        public IMongoClient MongoClient => _mongoClient;

        // Mongo database
        private readonly IMongoDatabase _mongoDatabase;
        public IMongoDatabase MongoDatabase => _mongoDatabase;

        // Account collection
        private readonly IMongoCollection<AccountModel> _accountCollection;
        public IMongoCollection<AccountModel> AccountCollection => _accountCollection;

        // User collection
        private readonly IMongoCollection<UserModel> _userCollection;
        public IMongoCollection<UserModel> UserCollection => _userCollection;

        public MongoContextSvc(IOptions<MongoDbSetting> mongoDbSettings)
        {
            var client = new MongoClient(mongoDbSettings.Value.ConnectionString);
            var database = client.GetDatabase(mongoDbSettings.Value.DatabaseName);

            _mongoClient = client;
            _mongoDatabase = database;

            _accountCollection = database.GetCollection<AccountModel>(mongoDbSettings.Value.AccountCollection);
            _userCollection = database.GetCollection<UserModel>(mongoDbSettings.Value.UserCollection);
        }
    }
}