using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace LCMS.Domain
{
    public class PagesInCourse
    {

        public PagesInCourse()
        {

        }

        public PagesInCourse(int pg_id, string pg_title, string pg_content, int cp_order)
        {
            Pg_Id = pg_id;
            Pg_Title = pg_title;
            Pg_Content = pg_content;
            CP_Order = cp_order;
        }

        public PagesInCourse(int pg_id, string pg_title, string pg_content, string pg_html, int cp_order)
        {
            Pg_Id = pg_id;
            Pg_Title = pg_title;
            Pg_Content = pg_content;
            Pg_HTML = pg_html;
            CP_Order = cp_order;
        }

        [Key]
        public int Pg_Id { get; set; }
        public string Pg_Title { get; set; }
        public string Pg_Content { get; set; }
        public string Pg_HTML { get; set; }
        public int CP_Order { get; set; }
    }
}
