using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LCMS.Domain;

namespace LCMS.Data.Repositories.Impl
{
    public class CoursesPagesRepository : ICoursesPagesRepository
    {
        private readonly LCMSContext _context;

        public CoursesPagesRepository(LCMSContext context)
        {
            _context = context;
        }

        public IEnumerable<Page> GetPagesInCourse(int coursePageId)
        {
            IEnumerable<Page> pages = _context.CoursesPages
                .Where(cp => cp.Crs_Id == coursePageId)
                .Select(cp => cp.Page)
                .ToList();

            return pages;
        }
        public IEnumerable<Course> GetCoursesPageIn(int coursePageId)
        {
            IEnumerable<Course> courses = _context.CoursesPages
                .Where(cp => cp.Pg_Id == coursePageId)
                .Select(cp => cp.Course)
                .ToList();

            return courses;
        }

        public CoursePage GetPageOrder(int crsId, int pgId)
        {
            CoursePage cpToReturn = _context.CoursesPages.FirstOrDefault(cp => cp.Crs_Id == crsId && cp.Pg_Id == pgId);
               
            return cpToReturn;
        }

        public CoursePage CreateCoursePage(CoursePage createdCoursePage)
        {
            _context.CoursesPages.Add(createdCoursePage);
            _context.SaveChanges();

            return createdCoursePage;
        }
    }
}
