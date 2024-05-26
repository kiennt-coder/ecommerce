

using StackExchange.Redis;

namespace CMS.Services
{
    public class RedisSvc : IRedisSvc
    {
        private readonly IDatabase _redisDb;

        private readonly ILogger<RedisSvc> _logger;

        public RedisSvc(IConnectionMultiplexer connectionMultiplexer, ILogger<RedisSvc> logger)
        {
            _redisDb = connectionMultiplexer.GetDatabase();
            _logger = logger;
        }

        public async Task<string?> GetAsync(string key)
        {
            string? value = null;
            try
            {
                value = await _redisDb.StringGetAsync(key);
                return value;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }

            return value;
        }

        public async Task<bool> SetAsync(string key, string value, TimeSpan timeout)
        {
            bool isSuccess = true;

            try
            {
                var setTask = _redisDb.StringSetAsync(key, value);
                var expireTask = _redisDb.KeyExpireAsync(key, timeout);
                var response = await Task.WhenAll(setTask, expireTask);

                foreach (var task in response)
                {
                    if (!task)
                    {
                        isSuccess = false;
                        break;
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return false;
            }

            return isSuccess;
        }

        public async Task<bool> RemoveAsync(string key)
        {
            try
            {
                return await _redisDb.KeyDeleteAsync(key);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return false;
            }
        }
    }
}