using MongoDB.Driver;

using CMS.Models;
using CMS.Services;

namespace CMS.Database
{
    public class AccountDb : IAccountDb
    {

        private readonly IMongoContextSvc _mongoContextSvc;

        public AccountDb(IMongoContextSvc mongoContextSvc)
        {
            _mongoContextSvc = mongoContextSvc;
        }

        public async Task<List<AccountModel>> GetAllAsync()
        {
            var filter = Builders<AccountModel>.Filter.Empty;
            return await _mongoContextSvc.AccountCollection.Find(filter).ToListAsync();
        }

        public async Task<AccountModel?> FindAsync(FilterDefinition<AccountModel> filter)
        {
            return await _mongoContextSvc.AccountCollection.Find(filter).FirstOrDefaultAsync();
        }

        public async Task AddAsync(AccountModel data, IClientSessionHandle? session = null)
        {
            if (session == null)
                await _mongoContextSvc.AccountCollection.InsertOneAsync(data);
            else
                await _mongoContextSvc.AccountCollection.InsertOneAsync(session, data);
        }

        public async Task UpdateAsync(string Id, UpdateDefinition<AccountModel> data, IClientSessionHandle? session = null)
        {
            var filter = Builders<AccountModel>.Filter.Eq(x => x.Id, Id);

            if (session == null)
                await _mongoContextSvc.AccountCollection.UpdateOneAsync(filter, data);
            else
                await _mongoContextSvc.AccountCollection.UpdateOneAsync(session, filter, data);
        }

        public async Task DeleteAsync(string Id, IClientSessionHandle? session = null)
        {
            var filter = Builders<AccountModel>.Filter.Eq(x => x.Id, Id);

            if (session == null)
                await _mongoContextSvc.AccountCollection.DeleteOneAsync(filter);
            else
                await _mongoContextSvc.AccountCollection.DeleteOneAsync(session, filter);
        }
    }
}