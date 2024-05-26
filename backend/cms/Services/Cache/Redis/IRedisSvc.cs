

namespace CMS.Services
{
    public interface IRedisSvc
    {
        // Get cache async
        Task<string?> GetAsync(string key);

        // Set cache async
        Task<bool> SetAsync(string key, string value, TimeSpan timeout);

        // Remove cache async
        Task<bool> RemoveAsync(string key);
    }
}