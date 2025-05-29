using System;
using Microsoft.EntityFrameworkCore.Update;
using Microsoft.EntityFrameworkCore;
using Register.Models;

public static class RegisterRoute
{
    public static void RegisterRoutes(this WebApplication app)
    {
        var route = app.MapGroup("person");

        route.MapPost("", async (RegisterRequest req, RegisterContext context) =>
        {
            var emailExists = await context.People.AnyAsync(p  => p.Email == req.Email);

            if (emailExists)
            {
                return Results.Conflict("E-mail já cadastrado");
            }

            var person = new RegisterModel(req.Name, req.Email, req.Password);
            await context.AddAsync(person);
            await context.SaveChangesAsync();

            return Results.Ok(person);
        });

        route.MapGet("", async (RegisterContext context) =>
        {
            var people = await context.People.ToListAsync();
            return Results.Ok(people);
        });

        route.MapPut("{id:guid}", async (Guid id, RegisterRequest req, RegisterContext context) =>
        {
            var person = await context.People.FirstOrDefaultAsync(x => x.Id == id);

            if (person == null)
            {
                return Results.NotFound();
            }

            person.ChangeProfile(req.Name, req.Email, req.Password);
            await context.SaveChangesAsync();

            return Results.Ok(person);
        });

        route.MapDelete("{id:guid}", async (Guid id, RegisterContext context) =>
        {
            var person = await context.People.FirstOrDefaultAsync(x => x.Id == id);

            if (person == null)
            {
                return Results.NotFound();
            }
            context.People.Remove(person);
            await context.SaveChangesAsync();

            return Results.Ok(person);
        });
    }
}