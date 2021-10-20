using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Services.ViewModels;

namespace LCMS.Services.Services
{
    public interface IPagesService
    {
        IEnumerable<PageViewModel> GetPages();
        PageViewModel GetPage(int pageId);
        PageViewModel CreatePage(PageViewModel pageToCreate);
        PageViewModel UpdatePage(PageViewModel pageToUpdate);
        void DeletePage(int pageId);
    }
}
