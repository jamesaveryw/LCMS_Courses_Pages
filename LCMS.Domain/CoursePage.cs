using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using LCMS.Domain;

namespace LCMS.Domain
{
    public class CoursePage
    {
        public CoursePage()
        {
        }

        public CoursePage(int crs_id, int pg_id, int cp_order)
        {
            Crs_Id = crs_id;
            Pg_Id = pg_id;
            CP_Order = cp_order;
        }

        //[Key, Column(Order = 0)]
        public int Crs_Id { get; set; }
        //[Key, Column(Order = 1)]
        public int Pg_Id { get; set; }
        public int CP_Order { get; set; }
        public virtual Course Course { get; set; }
        public virtual Page Page { get; set; }
    }
}