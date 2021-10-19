using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Domain;

namespace LCMS.Data.Repositories
{
    public interface IPagesKeywordsRepository
    {
        IEnumerable<PageKeyword> GetPageKeywords(int pgId);
        IEnumerable<PageKeyword> GetPagesKeywordIn(int kwId);
        PageKeyword CreatePageKeyword(PageKeyword createdPageKeyword);
        void DeletePageKeyword(int pgId, int kwId);
    }
}