namespace Clippers_Salon.Models
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class ClipperSalonDbContext : DbContext
    {
        // Your context has been configured to use a 'ClipperSalonDbContext' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'Clippers_Salon.Models.ClipperSalonDbContext' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'ClipperSalonDbContext' 
        // connection string in the application configuration file.
        public ClipperSalonDbContext()
            : base("name=ClipperSalonDbContext")
        {
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        public virtual DbSet<FinshedWork> FinshedWorks { get; set; }
        public virtual DbSet<Service> Serivces { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Stylist> Stylists { get; set; }
    }

    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public String Description { get; set; }
        public float Price { get; set; }
        public String Image { get; set; }
    }

    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public String Image { get; set; }
        public String Vendor { get; set; }
        public String Description { get; set; }
    }

    public class Stylist
    {
        public int Id { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Image { get; set; }
    }

    public class FinshedWork
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public String Description { get; set; }
        public Stylist Stylist { get; set; }
        public String Image { get; set; }
    }
}