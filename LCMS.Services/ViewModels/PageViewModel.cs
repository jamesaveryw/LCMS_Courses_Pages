using System;
using System.Collections.Generic;
using System.Text;

namespace LCMS.Services.ViewModels
{
    public class PageViewModel
    {
        public int Pg_Id { get; set; }
        public string Pg_Title { get; set; }
        public string Pg_Content { get; set; }
        //public HashSet<Course> Pg_Courses { get; set; }
        //public List<CoursePage> Pg_CoursesPages { get; set; }
    }
}
