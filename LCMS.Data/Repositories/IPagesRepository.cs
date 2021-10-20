using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Domain;

namespace LCMS.Data.Repositories
{
    public interface IPagesRepository
    {
        IEnumerable<Page> GetPages();
        Page GetPage(int pageId);
        Page CreatePage(Page createdPage);
        Page UpdatePage(Page updatedPage, int pageId);
        void DeletePage(int pageId);
    }
}
