using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LCMS.Services.Services;
using LCMS.Services.ViewModels;


namespace LCMS.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly ICoursesService _coursesService;

        public CoursesController(ICoursesService coursesService)
        {
            _coursesService = coursesService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<CourseViewModel> courses = _coursesService.GetCourses();

            return Ok(courses);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            CourseViewModel course = _coursesService.GetCourse(id);

            return Ok(course);
        }

        [HttpPost]
        public IActionResult Post([FromBody] CourseViewModel courseForm)
        {
            CourseViewModel courseToReturn = _coursesService.CreateCourse(courseForm);

            return Created("createcourse", courseToReturn);
        }

        [HttpPut("update-course")]
        public IActionResult Update([FromBody] CourseViewModel courseForm)
        {
            _coursesService.UpdateCourse(courseForm);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _coursesService.DeleteCourse(id);

            return NoContent();
        }
    }
}
