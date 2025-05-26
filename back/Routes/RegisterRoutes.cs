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
            var person = new RegisterModel(req.name, req.email, req.password);
            await context.AddAsync(person);
            await context.SaveChangesAsync();
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

            person.ChangeProfile(req.name, req.email, req.password);
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