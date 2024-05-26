

namespace CMS.Common
{
    public static class RegularExpression
    {
        // Email format
        public static string EmailPattern { get; } = @"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";

        // Between three and eighteen characters, only letters, numbers, and underscores are allowed
        public static string UsernamePattern { get; } = @"^[\w\s]{3,18}$";

        // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
        public static string PasswordPattern { get; } = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";

    }
}