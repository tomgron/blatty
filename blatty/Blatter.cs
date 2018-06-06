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
    }
}
