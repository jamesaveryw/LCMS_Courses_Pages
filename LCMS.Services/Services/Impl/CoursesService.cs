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
    public class CoursesService : ICoursesService
    {
        private readonly ICoursesRepository _repository;

        public CoursesService(ICoursesRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<CourseViewModel> GetCourses()
        {
            IEnumerable<CourseViewModel> coursesReturned = _repository.GetCourses().Select(course => ModelFactory.CreateViewModel(course));

            return coursesReturned;
        }

        public CourseViewModel GetCourse(int id)
        {
            CourseViewModel courseToReturn = ModelFactory.CreateViewModel(_repository.GetCourse(id));

            return courseToReturn;
        }

        public CourseViewModel CreateCourse(CourseViewModel courseToCreate)
        {
            Course newCourse = ModelFactory.CreateDomainModel(courseToCreate);
            _repository.CreateCourse(newCourse);

            return courseToCreate;
        }

        public void UpdateCourse(CourseViewModel courseToUpdate)
        {
            Course updatedCourse = ModelFactory.CreateDomainModel(courseToUpdate);
            _repository.UpdateCourse(updatedCourse, courseToUpdate.Crs_Id);

            return;
        }

        public void DeleteCourse(int courseId)
        {
            _repository.DeleteCourse(courseId);

            return;
        }
    }
}
