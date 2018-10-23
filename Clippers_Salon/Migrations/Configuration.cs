using Clippers_Salon.Models;

namespace Clippers_Salon.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Clippers_Salon.Models.ClipperSalonDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Clippers_Salon.Models.ClipperSalonDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 

            context.FinshedWorks.AddOrUpdate(new FinshedWork() { Title = "Test", Description = "Test", Id = 0, Image = "~/Images/stylists/me.jpg" });

            context.Serivces.AddOrUpdate(new Service() { Name = "Test", Price = 0.00f, Id = 0, Description = "Test", Image = "~/Images/stylists/me.jpg" });

            context.Products.AddOrUpdate(new Product() { Name = "Test", Price = 0.00f, Id = 0, Description = "Test", Image = "~/Images/stylists/me.jpg" , Vendor = "Test"});

            context.Stylists.AddOrUpdate(new Stylist() { FirstName = "Test", LastName = "Stylist", Id = 0, Image = "~/Images/stylists/me.jpg"});
        }
    }
}
