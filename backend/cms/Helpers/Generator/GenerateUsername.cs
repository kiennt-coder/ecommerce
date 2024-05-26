
using System;
using System.Text;

namespace CMS.Helpers
{
    public static class GenerateUsername
    {
        private static Random random = new Random();

        public static string Generate(string? prefix = "user_", int fixedLength = 10)
        {
            const string allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            if (string.IsNullOrEmpty(prefix)) prefix = "user_";

            // Ensure the prefix length does not exceed the fixed length
            if (prefix.Length >= fixedLength)
            {
                throw new ArgumentException($"The prefix '{prefix}' is too long for the fixed length of {fixedLength} characters.");
            }

            int randomPartLength = fixedLength - prefix.Length;

            StringBuilder username = new StringBuilder(prefix);

            for (int i = 0; i < randomPartLength; i++)
            {
                username.Append(allowedChars[random.Next(allowedChars.Length)]);
            }

            return username.ToString();
        }
    }
}