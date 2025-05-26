using System;
namespace Register.Models;

public class RegisterModel
{
    public RegisterModel(string name, string email, string password)
    {
        Id = Guid.NewGuid();
        Name = name;
        Email = email;
        Password = password;
    }

    public Guid Id { get; init; }
    public string Name { get; private set; }
    public string Email { get; private set; }
    public string Password { get; private set; }

    public void ChangeProfile(string name, string email, string password)
    {
        Name = name;
        Email = email;
        Password = password;
    }
}