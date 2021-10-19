using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace LCMS.Domain
{
    public class Keyword
    {
        public Keyword()
        {

        }

        public Keyword(string word)
        {
            Kw_Word = word;
        }

        [Key]
        public int Kw_Id { get; set; }
        public string Kw_Word { get; set; }
        public List<PageKeyword> Kw_PagesKeywords { get; set; }
    }
}
