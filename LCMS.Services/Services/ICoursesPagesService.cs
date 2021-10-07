using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Services.ViewModels;

namespace LCMS.Services.Services
{
    public interface ICoursesPagesService
    {
        IEnumerable<PageViewModel> GetPagesInCourse(int coursePageId);
        CoursePageViewModel CreateCoursePage(CoursePageViewModel coursePageToCreate);
    }
}
