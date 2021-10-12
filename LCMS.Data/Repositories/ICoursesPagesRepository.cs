using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Domain;

namespace LCMS.Data.Repositories
{
    public interface ICoursesPagesRepository
    {
        IEnumerable<Page> GetPagesNotInCourse(int courseId);
        IEnumerable<PagesInCourse> GetPagesInCourse(int coursePageId);
        IEnumerable<Course> GetCoursesPageIn(int coursePageId);
        CoursePage GetPageOrder(int crsId, int pgId);
        CoursePage CreateCoursePage(CoursePage createdCoursePage);
        void UpdateCoursePage(CoursePage updatedCoursePage, int courseId, int pageId);
    }
}
