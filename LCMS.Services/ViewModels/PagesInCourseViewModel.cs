using System;
using System.Collections.Generic;
using System.Text;

namespace LCMS.Services.ViewModels
{
    public class PagesInCourseViewModel
    {
        public int Pg_Id { get; set; }
        public string Pg_Title { get; set; }
        public string Pg_Content { get; set; }
        public string Pg_HTML { get; set; }
        public int CP_Order { get; set; }
    }
}
