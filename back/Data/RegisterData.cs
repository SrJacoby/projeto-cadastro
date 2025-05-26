using Microsoft.EntityFrameworkCore;
using Register.Models;

public class RegisterContext : DbContext
{
    public DbSet<RegisterModel> People { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=register.sqlite");
        base.OnConfiguring(optionsBuilder);
    }
}