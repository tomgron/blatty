using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using RingBuffer;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace blatty
{
    public class Blatter : Hub
    {
        private ILogger _logger;
        private static RingBuffer<Tuple<string,string>> buffer = new RingBuffer<Tuple<string, string>>(10, true);

        public Blatter(ILogger<Blatter> logger) => _logger = logger;

        public async Task<List<Tuple<string, string>>> GetMessages()
        {
            List<Tuple<string, string>> items = new List<Tuple<string, string>>(10);

            foreach (Tuple<string, string> item in buffer) 
                items.Add(item);

            return items;
        }

        public async Task SendMessage(string user, string message)
        {
            _logger?.LogInformation($"Message from {user} : {message}");
            buffer.Add(new Tuple<string, string>(user, message));
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
