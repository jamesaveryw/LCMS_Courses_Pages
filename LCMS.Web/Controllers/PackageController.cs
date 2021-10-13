using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LCMS.Services.Services.Impl;
using LCMS.Services.ViewModels;

namespace LCMS.Web.Controllers
{
    [Route("[controller]")]
    public class PackageController : ControllerBase
    {

        private readonly Services.Services.ICoursesPagesService _coursesPagesService;

        public PackageController(Services.Services.ICoursesPagesService coursesPagesService)
        {
            _coursesPagesService = coursesPagesService;
        }

        [HttpPut("PackageCourse/{crsId}")]
        public IActionResult PackageCourse([FromBody] IEnumerable<PagesInCourseViewModel> pagesInCourse, int crsID)
        {
            //IEnumerable<PagesInCourseViewModel> pagesInCourse = _coursesPagesService.GetPagesInCourse(course.Crs_Id);
            return Ok(pagesInCourse);
        }
    }
}
