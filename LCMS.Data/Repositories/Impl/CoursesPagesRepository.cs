﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using LCMS.Domain;

namespace LCMS.Data.Repositories.Impl
{
    public class CoursesPagesRepository : ICoursesPagesRepository
    {
        private readonly LCMSContext _context;

        public CoursesPagesRepository(LCMSContext context)
        {
            _context = context;
        }

        public IEnumerable<CoursePage> GetCoursePages(int courseId)
        {
            IEnumerable<CoursePage> coursepages = _context.CoursesPages
                .Where(cp => cp.Crs_Id == courseId)
                .Select(cp => cp)
                .ToList();

            return coursepages;
        }
        public IEnumerable<Page> GetPagesNotInCourse(int courseId)
        {

            IEnumerable<Page> pages = (from page in _context.Pages
                where !_context.CoursesPages.Any(cp => cp.Pg_Id == page.Pg_Id && cp.Crs_Id == courseId)
                select new Page
                {
                    Pg_Id = page.Pg_Id,
                    Pg_Title = page.Pg_Title,
                    Pg_Content = page.Pg_Content
                }).ToList();

            return pages;
        }

        public IEnumerable<PagesInCourse> GetPagesInCourse(int coursePageId)
        {
            // get list of all pages in course
            IEnumerable<Page> pages = _context.CoursesPages
                .Where(cp => cp.Crs_Id == coursePageId)
                .Select(cp => cp.Page)
                .ToList();

            int length = pages.Count();

            // set up pagesincourse array
            PagesInCourse[] pagesWithOrder = new PagesInCourse[length];
            int i = 0;
            foreach (var page in pages)
            {
                // Page info along with order number
                CoursePage record = _context.CoursesPages.FirstOrDefault(cp => cp.Pg_Id == page.Pg_Id);
                pagesWithOrder[i] = new PagesInCourse { 
                    Pg_Id = page.Pg_Id,
                    Pg_Title = page.Pg_Title,
                    Pg_Content = page.Pg_Content,
                    CP_Order = record.CP_Order
                };
                i++;
            }

            return pagesWithOrder;
        }

        public IEnumerable<Course> GetCoursesPageIn(int coursePageId)
        {
            IEnumerable<Course> courses = _context.CoursesPages
                .Where(cp => cp.Pg_Id == coursePageId)
                .Select(cp => cp.Course)
                .ToList();

            return courses;
        }

        public CoursePage GetPageOrder(int crsId, int pgId)
        {
            CoursePage cpToReturn = _context.CoursesPages.FirstOrDefault(cp => cp.Crs_Id == crsId && cp.Pg_Id == pgId);
               
            return cpToReturn;
        }

        public CoursePage CreateCoursePage(CoursePage createdCoursePage)
        {
            _context.CoursesPages.Add(createdCoursePage);
            _context.SaveChanges();

            return createdCoursePage;
        }

        public void UpdateCoursePage(CoursePage updatedCoursePage, int courseId, int pageId)
        {
            //_context.Pages.Update(updatedPage);
            //_context.SaveChanges();
            CoursePage deletedCoursePage = _context.CoursesPages.FirstOrDefault(coursepage => coursepage.Crs_Id == courseId && coursepage.Pg_Id == pageId);
            if (deletedCoursePage != null) _context.CoursesPages.Remove(deletedCoursePage);
            updatedCoursePage.Crs_Id = courseId;
            _context.CoursesPages.Add(updatedCoursePage);
            _context.SaveChanges();

            return;
        }

        public void DeleteCoursePage(int crsId, int pgId)
        {
            CoursePage coursePageToDelete = _context.CoursesPages.FirstOrDefault(coursepage => coursepage.Crs_Id == crsId && coursepage.Pg_Id == pgId);
            if (coursePageToDelete != null) _context.CoursesPages.Remove(coursePageToDelete);
            _context.SaveChanges();

            return;
        }
    }
}
