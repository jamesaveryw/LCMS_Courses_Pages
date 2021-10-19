using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using LCMS.Domain;

namespace LCMS.Domain
{
    public class PageKeyword
    {
        public PageKeyword()
        {

        }

        public PageKeyword(int pg_id, int kw_id)
        {
            Pg_Id = pg_id;
            Kw_Id = kw_id;
        }
        public int Pg_Id { get; set; }
        public int Kw_Id { get; set; }
        public virtual Page Page { get; set; }
        public virtual Keyword Keyword { get; set; }
    }
}
