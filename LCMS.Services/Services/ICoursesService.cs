using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Services.ViewModels;

namespace LCMS.Services.Services
{
    public interface ICoursesService
    {
        IEnumerable<CourseViewModel> GetCourses();
        CourseViewModel GetCourse(int courseId);
        CourseViewModel CreateCourse(CourseViewModel courseToCreate);
        void UpdateCourse(CourseViewModel CourseToUpdate);
        void DeleteCourse(int courseId);
    }
}
