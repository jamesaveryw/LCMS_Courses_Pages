﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LCMS.Data.Repositories;
using LCMS.Services.Factory;
using LCMS.Services.ViewModels;
using LCMS.Domain;

namespace LCMS.Services.Services.Impl
{
    public class PagesService : IPagesService
    {
        private readonly IPagesRepository _repository;

        public PagesService(IPagesRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<PageViewModel> GetPages()
        {
            IEnumerable<PageViewModel> pagesReturned = _repository.GetPages().Select(page => ModelFactory.CreateViewModel(page));

            return pagesReturned;
        }

        public PageViewModel GetPage(int id)
        {
            PageViewModel pageToReturn = ModelFactory.CreateViewModel(_repository.GetPage(id));

            return pageToReturn;
        }

        public PageViewModel CreatePage(PageViewModel pageToCreate)
        {
            Page newPage = ModelFactory.CreateDomainModel(pageToCreate);
            _repository.CreatePage(newPage);

            return pageToCreate;
        }

        public void UpdatePage(PageViewModel pageToUpdate)
        {
            Page updatedPage = ModelFactory.CreateDomainModel(pageToUpdate);
            _repository.UpdatePage(updatedPage, pageToUpdate.Pg_Id);

            return;
        }

        public void DeletePage(int pageId)
        {
            _repository.DeletePage(pageId);

            return;
        }
    }
}
