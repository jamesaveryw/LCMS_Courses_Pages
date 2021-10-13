using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Services.ViewModels;

namespace LCMS.Services.Services
{
    public interface ICoursesPagesService
    {
        IEnumerable<PageViewModel> GetPagesNotInCourse(int courseId);
        IEnumerable<PagesInCourseViewModel> GetPagesInCourse(int coursePageId);
        IEnumerable<CourseViewModel> GetCoursesPageIn(int coursePageId);
        int GetPageOrder(int crsId, int pgId);
        CoursePageViewModel CreateCoursePage(CoursePageViewModel coursePageToCreate);
        void UpdateCoursePage(CoursePageViewModel coursePageToUpdate);
        void DeleteCoursePage(int crsId, int pgId);
    }
}
