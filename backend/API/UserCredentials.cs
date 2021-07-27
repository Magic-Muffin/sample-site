
namespace API
{
    public class UserCredentials
    {
        public string username { get; set; }
        public string password { get; set; }
    }

    public class UserCredentialsResponse
    {
        public string token { get; set; }
    }
    
}