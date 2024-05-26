using MongoDB.Driver;

using CMS.Models;

namespace CMS.Database
{
    public interface IUserDb
    {
        Task<List<UserModel>> GetAllAsync();

        Task<UserModel?> FindAsync(FilterDefinition<UserModel> filter);

        Task AddAsync(UserModel data, IClientSessionHandle? session = null);

        Task UpdateAsync(string Id, UpdateDefinition<UserModel> data, IClientSessionHandle? session = null);

        Task DeleteAsync(string Id, IClientSessionHandle? session = null);
    }
}