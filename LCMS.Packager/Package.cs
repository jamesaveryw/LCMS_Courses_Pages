using System;
using System.IO;
using LCMS.Domain;
using System.Collections.Generic;

namespace LCMS.Packager
{
    public class Package
    {
        public Package()
        {

        }

        public Package(IEnumerable<PagesInCourse> pages, Course course)
        {
            Crs_pgs = pages;
            Crs = course;
        }

        public IEnumerable<PagesInCourse> Crs_pgs { get; set; }
        public Course Crs { get; set; }
    }
}
