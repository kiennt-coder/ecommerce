

using System.Security.Cryptography;

namespace CMS.Helpers
{
    public static class HashPassword
    {
        private const int SaltSize = 16;
        private const int KeySize = 32;
        private const int Iterations = 10000;
        private const char SaltDelimeter = ';';
        private static readonly HashAlgorithmName hashAlgorithmName = HashAlgorithmName.SHA256;

        public static string Hash(string value)
        {
            var salt = RandomNumberGenerator.GetBytes(SaltSize);
            var hash = Rfc2898DeriveBytes.Pbkdf2(value, salt, Iterations, hashAlgorithmName, KeySize);

            return string.Join(SaltDelimeter, Convert.ToBase64String(salt), Convert.ToBase64String(hash));
        }

        public static bool Validate(string value, string valueHashed)
        {
            string[] valueHashSplit = valueHashed.Split(SaltDelimeter);

            var salt = Convert.FromBase64String(valueHashSplit[0]);
            var hash = Convert.FromBase64String(valueHashSplit[1]);
            var valueHash = Rfc2898DeriveBytes.Pbkdf2(value, salt, Iterations, hashAlgorithmName, KeySize);
            return CryptographicOperations.FixedTimeEquals(hash, valueHash);
        }
    }
}