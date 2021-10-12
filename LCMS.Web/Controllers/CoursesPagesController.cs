using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LCMS.Services.ViewModels;
using LCMS.Services.Services;

namespace LCMS.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesPagesController : ControllerBase
    {
        private readonly ICoursesPagesService _coursesPagesService;

        public CoursesPagesController(ICoursesPagesService coursesPagesService)
        {
            _coursesPagesService = coursesPagesService;
        }

        [HttpGet("pages/-{id}")]
        public IActionResult GetPagesNotInCourse(int id)
        {
            IEnumerable<PageViewModel> coursespages = _coursesPagesService.GetPagesNotInCourse(id);

            return Ok(coursespages);
        }

        [HttpGet("pages/{id}")]
        public IActionResult GetPagesInCourse(int id)
        {
            IEnumerable<PagesInCourseViewModel> coursespages = _coursesPagesService.GetPagesInCourse(id);

            return Ok(coursespages);
        }

        [HttpGet("courses/{id}")]
        public IActionResult GetCourses(int id)
        {
            IEnumerable<CourseViewModel> coursespages = _coursesPagesService.GetCoursesPageIn(id);

            return Ok(coursespages);
        }

        [HttpGet("{crsId}-{pgId}")]
        public IActionResult GetPageOrder(int crsId, int pgId)
        {
            int orderNum = _coursesPagesService.GetPageOrder(crsId, pgId);

            return Ok(orderNum);
        }

        [HttpPost]
        public IActionResult Post(CoursePageViewModel coursePageForm)
        {
            CoursePageViewModel coursePageToReturn = _coursesPagesService.CreateCoursePage(coursePageForm);

            return Created("createCoursePage", coursePageToReturn);
        }

        [HttpPut("update-coursepage")]
        public IActionResult Update(CoursePageViewModel CoursePageForm)
        {
            _coursesPagesService.UpdateCoursePage(CoursePageForm);

            return NoContent();
        }
    }
}
