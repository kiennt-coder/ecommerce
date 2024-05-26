

namespace CMS.Models
{
    public class BaseResponse<T>
    {
        public int Status { get; set; } = 200;
        public string? Message { get; set; }

        public T? Data { get; set; }
    }
}