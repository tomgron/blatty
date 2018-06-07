using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace blatty
{
    public class Blatter : Hub
    {
        private ILogger _logger;

        public Blatter(ILogger<Blatter> logger) => _logger = logger;

        public async Task SendMessage(string user, string message)
        {
            _logger?.LogInformation($"Message from {user} : {message}");
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        public async Task AddUser(string username)
        {
            _logger?.LogInformation($"Added user {username}");
            await Clients.All.SendAsync("AddUser", Users.AddUser(username));
        }

        public async Task RemoveUser(string username)
        {
            _logger?.LogInformation($"Removed user {username}");
            await Clients.All.SendAsync("RemoveUser", Users.RemoveUser(username));
        }
    }
}
