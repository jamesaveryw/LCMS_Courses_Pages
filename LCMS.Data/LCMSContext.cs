using System;
using Microsoft.EntityFrameworkCore;
using LCMS.Domain;

namespace LCMS.Data
{
    public class LCMSContext : DbContext
    {
        public LCMSContext(DbContextOptions options)  : base(options) { }

        public DbSet<Course> Courses { get; set; }
        public DbSet<Page> Pages { get; set; }
        public DbSet<CoursePage> CoursesPages { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<CoursePage>()
                .HasKey(c => new { c.Crs_Id, c.Pg_Id });
            // Primary keys
            builder.Entity<Course>().HasKey(q => q.Crs_Id);
            builder.Entity<Page>().HasKey(q => q.Pg_Id);
            builder.Entity<CoursePage>().HasKey(q =>
                new {
                    q.Crs_Id,
                    q.Pg_Id
                });

            builder.Entity<CoursePage>()
                .HasOne(t => t.Page)
                .WithMany(t => t.Pg_CoursesPages)
                .HasForeignKey(t => t.Pg_Id);

            builder.Entity<CoursePage>()
                .HasOne(t => t.Course)
                .WithMany(t => t.Crs_CoursesPages)
                .HasForeignKey(t => t.Crs_Id);
        }
    }
}
