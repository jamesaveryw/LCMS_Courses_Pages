using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Services.ViewModels;

namespace LCMS.Services.Services
{
    public interface IKeywordsService
    {
        IEnumerable<KeywordViewModel> GetKeywords();
        KeywordViewModel GetKeyword(int id);
        KeywordViewModel GetKeyword(string word);
        KeywordViewModel CreateKeyword(KeywordViewModel keywordToCreate);
        void DeleteKeyword(int kwId);
    }
}
