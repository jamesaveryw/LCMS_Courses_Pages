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
        public DbSet<Keyword> Keywords { get; set; }
        public DbSet<CoursePage> CoursesPages { get; set; }
        public DbSet<PageKeyword> PagesKeywords { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            // Primary keys
            builder.Entity<Course>().HasKey(q => q.Crs_Id);
            builder.Entity<Page>().HasKey(q => q.Pg_Id);
            builder.Entity<Keyword>().HasKey(q => q.Kw_Id);
            builder.Entity<CoursePage>().HasKey(q =>
                new {
                    q.Crs_Id,
                    q.Pg_Id
                });
            builder.Entity<PageKeyword>().HasKey(q =>
                new {
                    q.Pg_Id,
                    q.Kw_Id
                });

            builder.Entity<CoursePage>()
                .HasOne(t => t.Page)
                .WithMany(t => t.Pg_CoursesPages)
                .HasForeignKey(t => t.Pg_Id);

            builder.Entity<CoursePage>()
                .HasOne(t => t.Course)
                .WithMany(t => t.Crs_CoursesPages)
                .HasForeignKey(t => t.Crs_Id);

            builder.Entity<PageKeyword>()
                .HasOne(t => t.Page)
                .WithMany(t => t.Pg_PagesKeywords)
                .HasForeignKey(t => t.Pg_Id);

            builder.Entity<PageKeyword>()
                .HasOne(t => t.Keyword)
                .WithMany(t => t.Kw_PagesKeywords)
                .HasForeignKey(t => t.Kw_Id);
        }
    }
}
