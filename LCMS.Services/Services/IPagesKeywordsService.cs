using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Services.ViewModels;

namespace LCMS.Services.Services
{
    public interface IPagesKeywordsService
    {
        IEnumerable<KeywordViewModel> GetPageKeywords(int pgId);
        IEnumerable<PageViewModel> GetPagesKeywordIn(int kwId);
        PageKeywordViewModel CreatePageKeyword(PageKeywordViewModel pageKeywordToCreate);
        void DeletePageKeyword(int pgId, int kwId);
    }
}
