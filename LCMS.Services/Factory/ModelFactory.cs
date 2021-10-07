using System;
using System.Collections.Generic;
using System.Text;
using LCMS.Domain;
using LCMS.Services.ViewModels;

namespace LCMS.Services.Factory
{
    public static class ModelFactory
    {
        public static PageViewModel CreateViewModel(Page pageToView)
        {
            return new PageViewModel()
            {
                Pg_Id = pageToView.Pg_Id,
                Pg_Title = pageToView.Pg_Title,
                Pg_Content = pageToView.Pg_Content//,
                //Pg_Courses = (HashSet<Course>)pageToView.Pg_Courses
            };
        }

        public static Page CreateDomainModel(PageViewModel pageToCreate)
        {
            return new Page(
                title: pageToCreate.Pg_Title,
                content: pageToCreate.Pg_Content
            );
        }

        public static CourseViewModel CreateViewModel(Course courseToView)
        {
            return new CourseViewModel()
            {
                Crs_Id = courseToView.Crs_Id,
                Crs_Title = courseToView.Crs_Title,
                Crs_Number = courseToView.Crs_Number,
                Crs_Type = courseToView.Crs_Type,
                Crs_Blurb = courseToView.Crs_Blurb//,
                //Crs_Pages = (HashSet<Page>)courseToView.Crs_Pages
            };
        }

        public static Course CreateDomainModel(CourseViewModel courseToCreate)
        {
            return new Course(
                title: courseToCreate.Crs_Title,
                number: courseToCreate.Crs_Number,
                type: courseToCreate.Crs_Type,
                blurb: courseToCreate.Crs_Blurb
            );
        }

        public static CoursePageViewModel CreateViewModel(CoursePage coursePageToView)
        {
            return new CoursePageViewModel()
            {
                Crs_Id = coursePageToView.Crs_Id,
                Pg_Id = coursePageToView.Pg_Id,
                CP_Order = coursePageToView.CP_Order
            };
        }

        public static CoursePage CreateDomainModel(CoursePageViewModel coursePageToCreate)
        {
            return new CoursePage(
                crs_id: coursePageToCreate.Crs_Id,
                pg_id: coursePageToCreate.Pg_Id,
                cp_order: coursePageToCreate.CP_Order
            );
        }
    }
}
