﻿using System;
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

        public PagesInCourse(int pg_id, string pg_title, int cp_order)
        {
            Pg_Id = pg_id;
            Pg_Title = pg_title;
            CP_Order = cp_order;
        }

        [Key]
        public int Pg_Id { get; set; }
        public string Pg_Title { get; set; }
        public int CP_Order { get; set; }
    }
}