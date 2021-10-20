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
    public class KeywordsService : IKeywordsService
    {
        private readonly IKeywordsRepository _repository;

        public KeywordsService(IKeywordsRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<KeywordViewModel> GetKeywords()
        {
            IEnumerable<KeywordViewModel> keywordsReturned = _repository.GetKeywords().Select(kw => ModelFactory.CreateViewModel(kw));

            return keywordsReturned;
        }

        public KeywordViewModel GetKeyword(int id)
        {
            KeywordViewModel keywordToReturn = ModelFactory.CreateViewModel(_repository.GetKeyword(id));

            return keywordToReturn;
        }

        public KeywordViewModel GetKeyword(string word)
        {
            KeywordViewModel keywordToReturn = ModelFactory.CreateViewModel(_repository.GetKeyword(word));

            return keywordToReturn;
        }

        public KeywordViewModel CreateKeyword(KeywordViewModel keywordToCreate)
        {
            Keyword newKeyword = ModelFactory.CreateDomainModel(keywordToCreate);
            KeywordViewModel createdKeyword = ModelFactory.CreateViewModel(_repository.CreateKeyword(newKeyword));

            return createdKeyword;
        }

        public void DeleteKeyword(int kwId)
        {
            _repository.DeleteKeyword(kwId);

            return;
        }
    }
}
