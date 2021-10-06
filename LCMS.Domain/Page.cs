using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace LCMS.Domain
{
    public class Page
    {
        public Page()
        {
        }

        public Page(string title, string content)
        {
            Pg_Title = title;
            Pg_Content = content;
        }

        [Key]
        public int Pg_Id { get; set; }
        public string Pg_Title { get; set; }
        public string Pg_Content { get; set; }
        //public ICollection<Course> Pg_Courses { get; set; }
        //public List<CoursePage> Pg_CoursesPages { get; set; }
    }
}
