using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LCMS.Data.Repositories;
using LCMS.Services.Factory;
using LCMS.Services.ViewModels;
using LCMS.Domain;

namespace LCMS.Services.Services.Impl
{
    public class PagesKeywordsService : IPagesKeywordsService
    {
        private readonly IPagesKeywordsRepository _pagesKeywordsRepo;
        private readonly IPagesRepository _pagesRepo;
        private readonly IKeywordsRepository _keywordsRepo;

        public PagesKeywordsService(IPagesKeywordsRepository pagesKeywordsRepo,
            IPagesRepository pagesRepo,
            IKeywordsRepository keywordsRepo)
        {
            _pagesKeywordsRepo = pagesKeywordsRepo;
            _pagesRepo = pagesRepo;
            _keywordsRepo = keywordsRepo;
        }

        public IEnumerable<KeywordViewModel> GetPageKeywords(int pgId)
        {
            // get all keywords records
            IEnumerable<Keyword> keywordsReturned = _keywordsRepo.GetKeywords();
            // get all pageskeywords records that have course ID
            IEnumerable<PageKeyword> pageKeywordsReturned = _pagesKeywordsRepo.GetPageKeywords(pgId);

            // select all keywordss that exist in the pagesKeywordsReturned
            IEnumerable<Keyword> keywordsInPage = (from keyword in keywordsReturned
                                               where pageKeywordsReturned.Any(cp => cp.Kw_Id == keyword.Kw_Id)
                                               select keyword).ToList();

            // create pageview from each page to send back to controller
            KeywordViewModel[] keywordsViewInPage = new KeywordViewModel[keywordsInPage.Count()];
            int i = 0;
            foreach (var keyword in keywordsInPage)
            {
                
                keywordsViewInPage[i] = ModelFactory.CreateViewModel(keyword);
                i++;
            }
            return keywordsViewInPage;
        }

        public IEnumerable<PageViewModel> GetPagesKeywordIn(int kwId)
        {
            // get all keywords records
            IEnumerable<Page> pagesReturned = _pagesRepo.GetPages();
            // get all pageskeywords records that have course ID
            IEnumerable<PageKeyword> pageKeywordsReturned = _pagesKeywordsRepo.GetPagesKeywordIn(kwId);

            // select all keywordss that exist in the pagesKeywordsReturned
            IEnumerable<Page> pagesKeywordIn = (from page in pagesReturned
                                                   where pageKeywordsReturned.Any(cp => cp.Pg_Id == page.Pg_Id)
                                                   select page).ToList();

            // create pageview from each page to send back to controller
            PageViewModel[] pageViewKeywordsIn = new PageViewModel[pagesKeywordIn.Count()];
            int i = 0;
            foreach (var page in pagesKeywordIn)
            {

                pageViewKeywordsIn[i] = ModelFactory.CreateViewModel(page);
                i++;
            }
            return pageViewKeywordsIn;
        }

        public PageKeywordViewModel CreatePageKeyword(PageKeywordViewModel pageKeywordToCreate)
        {
            PageKeyword newPageKeyword = ModelFactory.CreateDomainModel(pageKeywordToCreate);
            _pagesKeywordsRepo.CreatePageKeyword(newPageKeyword);

            return pageKeywordToCreate;
        }

        public void DeletePageKeyword(int pgId, int kwId)
        {
            _pagesKeywordsRepo.DeletePageKeyword(pgId, kwId);
        }
    }
}
