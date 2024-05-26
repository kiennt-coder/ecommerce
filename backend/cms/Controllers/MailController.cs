using Microsoft.AspNetCore.Mvc;

using CMS.Models;
using CMS.Services;
using Microsoft.AspNetCore.Authorization;
using System.Text.RegularExpressions;
using CMS.Common;
using SharpCompress.Common;

namespace CMS.Controllers
{
    [Authorize]
    [ApiController]
    [Route("v1/[controller]")]
    public class MailController : ControllerBase
    {
        private readonly IMailSvc _mailSvc;
        private readonly ILogger<MailController> _logger;

        public MailController(IMailSvc mailSvc, ILogger<MailController> logger)
        {
            _mailSvc = mailSvc;
            _logger = logger;
        }

        [HttpPost("SendMail")]
        public async Task<IActionResult> SendMail(MailData? mailData)
        {
            var baseResponse = new BaseResponse<string>();

            if (mailData == null)
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Dữ liệu không hợp lệ!";
                return BadRequest(baseResponse);
            }

            if (string.IsNullOrEmpty(mailData.ToEmail))
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Email nguời nhận không được để trống!";
                return BadRequest(baseResponse);
            }

            bool isEmail = Regex.Match(mailData.ToEmail, RegularExpression.EmailPattern).Success;

            // Return when email wrong format
            if (!isEmail)
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Email không hợp lệ";

                return BadRequest(baseResponse);
            }

            if (string.IsNullOrEmpty(mailData.Subject))
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Tiêu đề không được để trống!";
                return BadRequest(baseResponse);
            }

            if (string.IsNullOrEmpty(mailData.Body))
            {
                baseResponse.Status = StatusCodes.Status400BadRequest;
                baseResponse.Message = "Nội dung không được để trống!";
                return BadRequest(baseResponse);
            }

            try
            {
                string filePath = Directory.GetCurrentDirectory() + "\\Templates\\Mail\\VerifyEmail.html";

                string fileText = System.IO.File.ReadAllText(filePath);
                fileText = string.Format(fileText, "Lộc Quang Sơn", "https://google.com", "Click me");

                mailData.Body = fileText;

                baseResponse = await _mailSvc.SendAsync(mailData);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                baseResponse.Status = StatusCodes.Status500InternalServerError;
                baseResponse.Message = "Xảy ra lỗi trong quá trình đọc file";
                baseResponse.Data = ex.Message;
                return StatusCode(baseResponse.Status, baseResponse); ;
            }

            return StatusCode(baseResponse.Status, baseResponse);
        }
    }
}