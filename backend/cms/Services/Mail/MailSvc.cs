
using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Options;

using CMS.Models;

namespace CMS.Services
{
    public class MailSvc : IMailSvc
    {
        private readonly MailSetting _mailSetting;

        private readonly ILogger<MailSvc> _logger;

        public MailSvc(IOptions<MailSetting> mailSetting, ILogger<MailSvc> logger)
        {
            _mailSetting = mailSetting.Value;
            _logger = logger;
        }

        public async Task<BaseResponse<string>> SendAsync(MailData mailData)
        {
            var baseResponse = new BaseResponse<string>();
            try
            {
                using (var smtpClient = new SmtpClient(_mailSetting.Host)
                {
                    Port = _mailSetting.Port,
                    Credentials = new NetworkCredential(_mailSetting.UserName, _mailSetting.Password),
                    EnableSsl = _mailSetting.EnableSSL
                })
                {

                    var mailMessage = new MailMessage
                    {
                        From = new MailAddress(_mailSetting.UserName!),
                        Subject = mailData.Subject,
                        Body = mailData.Body,
                        IsBodyHtml = true
                    };

                    mailMessage.To.Add(mailData.ToEmail!);

                    await smtpClient.SendMailAsync(mailMessage);

                    smtpClient.Dispose();
                }

                baseResponse.Message = "Gửi mail thành công";
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                baseResponse.Status = StatusCodes.Status500InternalServerError;
                baseResponse.Message = "Xảy ra lỗi trong quá trình gửi mail";
            }

            return baseResponse;
        }
    }
}