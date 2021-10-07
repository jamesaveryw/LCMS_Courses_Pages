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

                // IEnumerable<List<String>> resultSelect = employees.Select(e=> e.Skills);
                //.Where(cp => cp.Crs_Id == coursePageId)
                //.Select(cp => cp.Page)
                //.ToList();

            //var commentsOfMember = context.MemberComments
            //.Where(mc => mc.MemberId == 1)
            //.Select(mc => mc.Comment)
            //.ToList();
            //IEnumerable<CoursePage> coursespages = _context.CoursesPages.ToList();

            return pages;
        }

        public CoursePage CreateCoursePage(CoursePage createdCoursePage)
        {
            _context.CoursesPages.Add(createdCoursePage);
            _context.SaveChanges();

            return createdCoursePage;
        }
    }
}
