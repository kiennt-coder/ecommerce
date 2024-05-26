using MongoDB.Driver;

using CMS.Models;

namespace CMS.Database
{
    public interface IAccountDb
    {
        Task<List<AccountModel>> GetAllAsync();

        Task<AccountModel?> FindAsync(FilterDefinition<AccountModel> filter);

        Task AddAsync(AccountModel data, IClientSessionHandle? session = null);

        Task UpdateAsync(string Id, UpdateDefinition<AccountModel> data, IClientSessionHandle? session = null);

        Task DeleteAsync(string Id, IClientSessionHandle? session = null);
    }
}