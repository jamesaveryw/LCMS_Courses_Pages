using System;
using System.Collections.Generic;
using System.Text;

namespace LCMS.Services.ViewModels
{
    public class CourseViewModel
    {
        public int Crs_Id { get; set; }
        public string Crs_Title { get; set; }
        public string Crs_Number { get; set; }
        public string Crs_Type { get; set; }
        public string Crs_Blurb { get; set; }
        //public HashSet<Page> Crs_Pages { get; set; }
        //public List<CoursePage> Crs_CoursesPages { get; set; }
    }
}
