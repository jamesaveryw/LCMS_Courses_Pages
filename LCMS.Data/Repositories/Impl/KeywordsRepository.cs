using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LCMS.Domain;

namespace LCMS.Data.Repositories.Impl
{
    public class KeywordsRepository : IKeywordsRepository
    {
        private readonly LCMSContext _context;

        public KeywordsRepository(LCMSContext context)
        {
            _context = context;
        }

        public IEnumerable<Keyword> GetKeywords()
        {
            IEnumerable<Keyword> keywords = _context.Keywords.ToList();

            return keywords;
        }

        public Keyword GetKeyword(int kwId)
        {
            Keyword keywordToReturn = _context.Keywords.FirstOrDefault(kw => kw.Kw_Id == kwId);

            return keywordToReturn;
        }

        public Keyword GetKeyword(string kwWord)
        {
            Keyword keywordToReturn = _context.Keywords.FirstOrDefault(kw => kw.Kw_Word.ToLower() == kwWord.ToLower());

            return keywordToReturn;
        }

        public Keyword CreateKeyword(Keyword createdKeyword)
        {
            // only add new keyword if it doesn't already exist
            if (_context.Keywords.FirstOrDefault(kw => kw.Kw_Word.ToLower() == createdKeyword.Kw_Word.ToLower()) == null)
            {
                _context.Keywords.Add(createdKeyword);
                _context.SaveChanges();
            }
            else
            {
                // return keyword if it does already exist
                createdKeyword = _context.Keywords.FirstOrDefault(kw => kw.Kw_Word.ToLower() == createdKeyword.Kw_Word.ToLower());
            }

            return createdKeyword;
        }

        public void DeleteKeyword(int kwId)
        {
            Keyword keywordToDelete = _context.Keywords.FirstOrDefault(kw => kw.Kw_Id == kwId);
            if (keywordToDelete != null) _context.Keywords.Remove(keywordToDelete);
            _context.SaveChanges();

            return;
        }

    }
}
