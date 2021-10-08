﻿using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Domain;

namespace LCMS.Data.Repositories
{
    public interface ICoursesPagesRepository
    {
        IEnumerable<Page> GetPagesInCourse(int coursePageId);
        CoursePage GetPageOrder(int crsId, int pgId);
        CoursePage CreateCoursePage(CoursePage createdCoursePage);

    }
}
