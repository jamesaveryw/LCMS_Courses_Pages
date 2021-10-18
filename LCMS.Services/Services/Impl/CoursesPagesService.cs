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
        private readonly ICoursesPagesRepository _coursesPagesRepo;
        private readonly IPagesRepository _pagesRepo;
        private readonly ICoursesRepository _coursesRepo;

        public CoursesPagesService(ICoursesPagesRepository coursesPagesRepo, 
            IPagesRepository pagesRepo,
            ICoursesRepository coursesRepo)
        {
            _coursesPagesRepo = coursesPagesRepo;
            _pagesRepo = pagesRepo;
            _coursesRepo = coursesRepo;
        }

        public IEnumerable<PageViewModel> GetPagesNotInCourse(int courseId)
        {
            // get all pages records
            IEnumerable<Page> pagesReturned = _pagesRepo.GetPages();
            // get all coursespages records that have course ID
            IEnumerable<CoursePage> coursePagesReturned = _coursesPagesRepo.GetCoursePages(courseId);

            // select all pages that don't exist in the coursesPagesReturned
            IEnumerable<Page> pagesNotInCourse = (from page in pagesReturned
                                                  where !coursePagesReturned.Any(cp => cp.Pg_Id == page.Pg_Id)
                                                  select page).ToList();
            
            // create pageview from each page to send back to controller
            PageViewModel[] pageViewNotInCourse = new PageViewModel[pagesNotInCourse.Count()];
            int i = 0;
            foreach (var page in pagesNotInCourse)
            {
                pageViewNotInCourse[i] = ModelFactory.CreateViewModel(page);
                i++;
            }

            return pageViewNotInCourse;
        }
        public IEnumerable<PagesInCourseViewModel> GetPagesInCourse(int coursePageId)
        {
            IEnumerable<PagesInCourseViewModel> pagesReturned = _coursesPagesRepo.GetPagesInCourse(coursePageId).Select(coursepage => ModelFactory.CreateViewModel(coursepage)).ToList();

            return pagesReturned;
        }
        public IEnumerable<CourseViewModel> GetCoursesPageIn(int coursePageId)
        {
            IEnumerable<CourseViewModel> coursesReturned = _coursesPagesRepo.GetCoursesPageIn(coursePageId).Select(coursepage => ModelFactory.CreateViewModel(coursepage)).ToList();

            return coursesReturned;
        }

        public int GetPageOrder(int crsId, int pgId)
        {
            CoursePageViewModel coursePage = ModelFactory.CreateViewModel(_coursesPagesRepo.GetPageOrder(crsId, pgId));
            int orderNum = coursePage.CP_Order;

            return orderNum;
        }

        public CoursePageViewModel CreateCoursePage(CoursePageViewModel coursePageToCreate)
        {
            CoursePage newCoursePage = ModelFactory.CreateDomainModel(coursePageToCreate);
            _coursesPagesRepo.CreateCoursePage(newCoursePage);

            return coursePageToCreate;
        }

        public void UpdateCoursePage(CoursePageViewModel coursePageToUpdate)
        {
            CoursePage updatedCoursePage = ModelFactory.CreateDomainModel(coursePageToUpdate);
            _coursesPagesRepo.UpdateCoursePage(updatedCoursePage, coursePageToUpdate.Crs_Id, coursePageToUpdate.Pg_Id);

            return;
        }

        public void DeleteCoursePage(int crsId, int pgId)
        {
            _coursesPagesRepo.DeleteCoursePage(crsId, pgId);

            return;
        }
    }
}
