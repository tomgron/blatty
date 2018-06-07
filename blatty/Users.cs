using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace blatty
{
    public static class Users
    {
        private static List<string> _users = new List<string>();

        public static List<string> AddUser(string username)
        {
            _users.Add(username);
            return _users;
        }

        public static List<string> RemoveUser(string username)
        {
            _users.Remove(username);
            return _users;
        }
    }
}
