using MongoDB.Driver;

using CMS.Models;
using CMS.Services;

namespace CMS.Database
{
    public class UserDb : IUserDb
    {
        private readonly IMongoContextSvc _mongoContextSvc;

        public UserDb(IMongoContextSvc mongoContextSvc)
        {
            _mongoContextSvc = mongoContextSvc;
        }

        public async Task<List<UserModel>> GetAllAsync()
        {
            var filter = Builders<UserModel>.Filter.Empty;
            return await _mongoContextSvc.UserCollection.Find(filter).ToListAsync();
        }

        public async Task<UserModel?> FindAsync(FilterDefinition<UserModel> filter)
        {
            return await _mongoContextSvc.UserCollection.Find(filter).FirstOrDefaultAsync();
        }

        public async Task AddAsync(UserModel data, IClientSessionHandle? session = null)
        {
            if (session == null)
                await _mongoContextSvc.UserCollection.InsertOneAsync(data);
            else
                await _mongoContextSvc.UserCollection.InsertOneAsync(session, data);
        }

        public async Task UpdateAsync(string Id, UpdateDefinition<UserModel> data, IClientSessionHandle? session = null)
        {
            var filter = Builders<UserModel>.Filter.Eq(x => x.Id, Id);

            if (session == null)
                await _mongoContextSvc.UserCollection.UpdateOneAsync(filter, data);
            else
                await _mongoContextSvc.UserCollection.UpdateOneAsync(session, filter, data);
        }

        public async Task DeleteAsync(string Id, IClientSessionHandle? session = null)
        {
            var filter = Builders<UserModel>.Filter.Eq(x => x.Id, Id);

            if (session == null)
                await _mongoContextSvc.UserCollection.DeleteOneAsync(filter);
            else
                await _mongoContextSvc.UserCollection.DeleteOneAsync(session, filter);
        }
    }
}