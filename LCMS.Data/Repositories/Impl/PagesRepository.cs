using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LCMS.Domain;

namespace LCMS.Data.Repositories.Impl
{
    public class PagesRepository : IPagesRepository
    {
        private readonly LCMSContext _context;

        public PagesRepository(LCMSContext context)
        {
            _context = context;
        }

        public IEnumerable<Page> GetPages()
        {
            IEnumerable<Page> pages = _context.Pages.ToList();

            return pages;
        }

        public Page GetPage(int pageId)
        {
            Page pageToReturn = _context.Pages.FirstOrDefault(page => page.Pg_Id == pageId);

            return pageToReturn;
        }

        public Page CreatePage(Page createdPage)
        {
            _context.Pages.Add(createdPage);
            _context.SaveChanges();

            return createdPage;
        }

        public void UpdatePage(Page updatedPage, int pageId)
        {
            //_context.Pages.Update(updatedPage);
            //_context.SaveChanges();
            Page deletedPage = _context.Pages.FirstOrDefault(page => page.Pg_Id == pageId);
            if (deletedPage != null) _context.Pages.Remove(deletedPage);
            updatedPage.Pg_Id = pageId;
            _context.Pages.Add(updatedPage);
            _context.SaveChanges();

            return;
        }

        public void DeletePage(int pageId)
        {
            Page pageToDelete = _context.Pages.FirstOrDefault(page => page.Pg_Id == pageId);
            if (pageToDelete != null) _context.Pages.Remove(pageToDelete);
            _context.SaveChanges();

            return;
        }
    }
}
