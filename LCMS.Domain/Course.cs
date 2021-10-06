using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace LCMS.Domain
{
    public class Course
    {
        public Course()
        {

        }

        public Course(string title, string number, string type, string blurb)
        {
            Crs_Title = title;
            Crs_Number = number;
            Crs_Type = type;
            Crs_Blurb = blurb;
        }

        [Key]
        public int Crs_Id { get; set; }
        public string Crs_Title { get; set; }
        public string Crs_Number { get; set; }
        public string Crs_Type { get; set; }
        public string Crs_Blurb { get; set; }
        //public ICollection<Page> Crs_Pages { get; set; }
        //might not need this next line
        //public List<CoursePage> Crs_CoursesPages { get; set; }

    }
}
