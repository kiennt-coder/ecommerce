

using CMS.Models;

namespace CMS.Services
{
    public interface IMailSvc
    {
        Task<BaseResponse<string>> SendAsync(MailData mailData);
    }
}