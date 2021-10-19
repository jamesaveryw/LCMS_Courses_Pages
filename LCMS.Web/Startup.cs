using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using LCMS.Data;
using LCMS.Data.Repositories;
using LCMS.Data.Repositories.Impl;
using LCMS.Services.Services;
using LCMS.Services.Services.Impl;

namespace LCMS.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<LCMSContext>(opts => opts.UseSqlServer(Configuration["ConnectionString:LCMSDB"])); 
            services.AddScoped<IPagesRepository, PagesRepository>();
            services.AddScoped<ICoursesRepository, CoursesRepository>();
            services.AddScoped<IKeywordsRepository, KeywordsRepository>();
            services.AddScoped<ICoursesPagesRepository, CoursesPagesRepository>();
            services.AddScoped<IPagesKeywordsRepository, PagesKeywordsRepository>();
            services.AddScoped<IPagesService,PagesService>();
            services.AddScoped<ICoursesService, CoursesService>();
            services.AddScoped<IKeywordsService, KeywordsService>();
            services.AddScoped<ICoursesPagesService, CoursesPagesService>();
            services.AddScoped<IPagesKeywordsService, PagesKeywordsService>();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseHttpsRedirection();

            app.UseRouting();
            
            app.UseCors(x => x
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .SetIsOriginAllowed(origin => true) // allow any origin
                  .AllowCredentials()); // allow credentials

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
