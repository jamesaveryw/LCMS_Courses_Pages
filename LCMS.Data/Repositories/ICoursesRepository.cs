using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Domain;

namespace LCMS.Data.Repositories
{
    public interface ICoursesRepository
    {
        IEnumerable<Course> GetCourses();
        Course GetCourse(int courseId);
        Course CreateCourse(Course createdCourse);
        void UpdateCourse(Course updatedCourse, int courseId);
        void DeleteCourse(int courseId);
    }
}
