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
    }
}
