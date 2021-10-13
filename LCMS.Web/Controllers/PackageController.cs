using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LCMS.Services.ViewModels;
using LCMS.Packager;
using LCMS.Domain;
using LCMS.Services.Factory;

namespace LCMS.Web.Controllers
{
    [Route("[controller]")]
    public class PackageController : ControllerBase
    {

        //private readonly Services.Services.ICoursesPagesService _coursesPagesService;
        private readonly Services.Services.ICoursesService _coursesService;

        /*public PackageController(Services.Services.ICoursesPagesService coursesPagesService)
        {
            _coursesPagesService = coursesPagesService;
        }*/
        public PackageController(Services.Services.ICoursesService coursesService)
        {
            _coursesService = coursesService;
        }

        [HttpPut("PackageCourse/{crsId}")]
        public IActionResult PackageCourse([FromBody] IEnumerable<PagesInCourseViewModel> pagesInCourseViewModel, int crsID)
        {
            // get number of pages in course
            int length = pagesInCourseViewModel.Count();

            // create a Course object from crsID
            CourseViewModel courseViewModel = _coursesService.GetCourse(crsID);
            Course course = ModelFactory.CreateDomainModel(courseViewModel);

            // create an array of Pages
            PagesInCourse[] pagesInCourse = new PagesInCourse[length];
            int i = 0;
            foreach (var pageInCourseViewModel in pagesInCourseViewModel)
            {
                pagesInCourse[i] = ModelFactory.CreateDomainModel(pageInCourseViewModel);
                i++;
            }

            // create a new package              
            Package crsPkg = new Package(pagesInCourse, course);
            crsPkg.CloneTemplate();

            //IEnumerable<PagesInCourseViewModel> pagesInCourse = _coursesPagesService.GetPagesInCourse(course.Crs_Id);
            return Ok(pagesInCourse);
        }
    }
}
