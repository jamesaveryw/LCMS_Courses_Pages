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


        public IEnumerable<PagesInCourseViewModel> GetPagesInCourse(int courseId)
        {
            // get all pages records
            IEnumerable<Page> pagesReturned = _pagesRepo.GetPages();
            // get all coursespages records that have course ID
            IEnumerable<CoursePage> coursePagesReturned = _coursesPagesRepo.GetCoursePages(courseId);

            // select all pages that exist in the coursesPagesReturned
            IEnumerable<Page> pagesInCourse = (from page in pagesReturned
                                                  where coursePagesReturned.Any(cp => cp.Pg_Id == page.Pg_Id)
                                                  select page).ToList();

            // create pageview from each page to send back to controller
            PagesInCourseViewModel[] pageViewInCourse = new PagesInCourseViewModel[pagesInCourse.Count()];
            int i = 0;
            foreach (var page in pagesInCourse)
            {
                CoursePage coursepage = coursePagesReturned.FirstOrDefault(cp => cp.Pg_Id == page.Pg_Id);
                PagesInCourse pageInCourse = new PagesInCourse
                {
                    Pg_Id = page.Pg_Id,
                    Pg_Title = page.Pg_Title,
                    Pg_Content = page.Pg_Content,
                    CP_Order = coursepage.CP_Order
                };
                pageViewInCourse[i] = ModelFactory.CreateViewModel(pageInCourse);
                i++;
            }
            return pageViewInCourse;
        }


        public IEnumerable<CourseViewModel> GetCoursesPageIn(int pageId)
        {
            // get all course records
            IEnumerable<Course> coursesReturned = _coursesRepo.GetCourses();
            // get all coursespages records that have page ID
            IEnumerable<CoursePage> coursesPageReturned = _coursesPagesRepo.GetCoursesPageIn(pageId);
            
            // select all courses that exist in the coursesPagesReturned
            IEnumerable<Course> coursesPageIn = (from course in coursesReturned
                                                  where coursesPageReturned.Any(cp => cp.Crs_Id == course.Crs_Id)
                                                  select course).ToList();

            // create courseview from each course to send back to controller
            CourseViewModel[] courseViewPagesIn = new CourseViewModel[coursesPageIn.Count()];
            int i = 0;
            foreach (var course in coursesPageIn)
            {
                courseViewPagesIn[i] = ModelFactory.CreateViewModel(course);
                i++;
            }

            return courseViewPagesIn;
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
