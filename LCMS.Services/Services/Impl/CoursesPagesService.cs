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
    public class CoursesPagesService : ICoursesPagesService
    {
        private readonly ICoursesPagesRepository _repository;

        public CoursesPagesService(ICoursesPagesRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<PageViewModel> GetPagesNotInCourse(int courseId)
        {
            IEnumerable<PageViewModel> pagesReturned = _repository.GetPagesNotInCourse(courseId).Select(coursepage => ModelFactory.CreateViewModel(coursepage)).ToList();

            return pagesReturned;
        }
        public IEnumerable<PagesInCourseViewModel> GetPagesInCourse(int coursePageId)
        {
            IEnumerable<PagesInCourseViewModel> pagesReturned = _repository.GetPagesInCourse(coursePageId).Select(coursepage => ModelFactory.CreateViewModel(coursepage)).ToList();

            return pagesReturned;
        }
        public IEnumerable<CourseViewModel> GetCoursesPageIn(int coursePageId)
        {
            IEnumerable<CourseViewModel> coursesReturned = _repository.GetCoursesPageIn(coursePageId).Select(coursepage => ModelFactory.CreateViewModel(coursepage)).ToList();

            return coursesReturned;
        }

        public int GetPageOrder(int crsId, int pgId)
        {
            CoursePageViewModel coursePage = ModelFactory.CreateViewModel(_repository.GetPageOrder(crsId, pgId));
            int orderNum = coursePage.CP_Order;

            return orderNum;
        }

        public CoursePageViewModel CreateCoursePage(CoursePageViewModel coursePageToCreate)
        {
            CoursePage newCoursePage = ModelFactory.CreateDomainModel(coursePageToCreate);
            _repository.CreateCoursePage(newCoursePage);

            return coursePageToCreate;
        }

        public void UpdateCoursePage(CoursePageViewModel coursePageToUpdate)
        {
            CoursePage updatedCoursePage = ModelFactory.CreateDomainModel(coursePageToUpdate);
            _repository.UpdateCoursePage(updatedCoursePage, coursePageToUpdate.Crs_Id, coursePageToUpdate.Pg_Id);

            return;
        }

        public void DeleteCoursePage(int crsId, int pgId)
        {
            _repository.DeleteCoursePage(crsId, pgId);

            return;
        }
    }
}
