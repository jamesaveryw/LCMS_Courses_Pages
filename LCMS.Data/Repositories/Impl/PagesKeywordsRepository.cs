using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LCMS.Domain;

namespace LCMS.Data.Repositories.Impl
{
    public class PagesKeywordsRepository : IPagesKeywordsRepository
    {
        private readonly LCMSContext _context;

        public PagesKeywordsRepository(LCMSContext context)
        {
            _context = context;
        }

        public IEnumerable<PageKeyword> GetPageKeywords(int pgId)
        {
            IEnumerable<PageKeyword> pagekeywords = _context.PagesKeywords
                .Where(pk => pk.Pg_Id == pgId)
                .Select(pk => pk)
                .ToList();

            return pagekeywords;
        }
        public IEnumerable<PageKeyword> GetPagesKeywordIn(int kwId)
        {
            IEnumerable<PageKeyword> pageskeywords = _context.PagesKeywords
                .Where(pk => pk.Kw_Id == kwId)
                .Select(pk => pk)
                .ToList();

            return pageskeywords;
        }
        public PageKeyword CreatePageKeyword(PageKeyword createdPageKeyword)
        {
            _context.PagesKeywords.Add(createdPageKeyword);
            _context.SaveChanges();

            return createdPageKeyword;
        }

        public void DeletePageKeyword(int pgId, int kwId)
        {
            PageKeyword pageKeywordToDelete = _context.PagesKeywords.FirstOrDefault(pk => pk.Pg_Id == pgId && pk.Kw_Id == kwId);
            if (pageKeywordToDelete != null) _context.PagesKeywords.Remove(pageKeywordToDelete);
            _context.SaveChanges();

            return;
        }
    }
}
