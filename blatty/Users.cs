using System;
using System.Collections.Generic;
using System.Linq;

namespace blatty
{
    public static class Users
    {
        private static  List<User> _users = new List<User>();

        public static List<User> AddUser(string username)
        {
            _users.Add(new User(username));
            return _users;
        }

        public static List<User> RemoveUser(string username)
        {
            _users.Remove(_users.FirstOrDefault(x => x.Name == username));
            return _users;
        }
    }
}
