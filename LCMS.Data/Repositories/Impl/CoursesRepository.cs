using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LCMS.Domain;

namespace LCMS.Data.Repositories.Impl
{
    public class CoursesRepository : ICoursesRepository
    {
        private readonly LCMSContext _context;

        public CoursesRepository(LCMSContext context)
        {
            _context = context;
        }

        public IEnumerable<Course> GetCourses()
        {
            IEnumerable<Course> courses = _context.Courses.ToList();

            return courses;
        }

        public Course GetCourse(int courseId)
        {
            Course courseToReturn = _context.Courses.FirstOrDefault(course => course.Crs_Id == courseId);

            return courseToReturn;
        }

        public Course CreateCourse(Course createdCourse)
        {
            _context.Courses.Add(createdCourse);
            _context.SaveChanges();

            return createdCourse;
        }

        public void UpdateCourse(Course updatedCourse, int courseId)
        {
            //_context.Courses.Update(updatedCourse);
            //_context.SaveChanges();
            Course deletedCourse = _context.Courses.FirstOrDefault(course => course.Crs_Id == courseId);
            if (deletedCourse != null) _context.Courses.Remove(deletedCourse);
            updatedCourse.Crs_Id = courseId;
            _context.Courses.Add(updatedCourse);
            _context.SaveChanges();

            return;
        }

        public void DeleteCourse(int courseId)
        {
            Course courseToDelete = _context.Courses.FirstOrDefault(course => course.Crs_Id == courseId);
            if (courseToDelete != null) _context.Courses.Remove(courseToDelete);
            _context.SaveChanges();

            return;
        }
    }
}
