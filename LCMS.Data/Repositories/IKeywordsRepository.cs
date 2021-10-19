using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Domain;

namespace LCMS.Data.Repositories
{
    public interface IKeywordsRepository
    {
        IEnumerable<Keyword> GetKeywords();
        Keyword GetKeyword(int kwId);
        Keyword GetKeyword(string kwWord);
        Keyword CreateKeyword(Keyword createdKeyword);
        void DeleteKeyword(int kwId);
    }
}
