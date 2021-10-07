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
        //[Key, Column(Order = 0)]
        public int Crs_Id { get; set; }
        //[Key, Column(Order = 1)]
        public int Pg_Id { get; set; }

        public virtual Course Course { get; set; }
        public virtual Page Page { get; set; }

        public int Order { get; set; }
    }
}