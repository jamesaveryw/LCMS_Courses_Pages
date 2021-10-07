using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Domain;

namespace LCMS.Data.Repositories
{
    public interface ICoursesPagesRepository
    {
        void AddPageToCourse(Course courseToAddTo, Page pageToAdd);
    }
}
