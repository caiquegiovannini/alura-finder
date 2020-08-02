import React, { useEffect, useState } from 'react';
import coursesRepository from '../../repositories/courses';

import Topbar from '../../components/Topbar';
import CoursesList from '../../components/CoursesList';

function Courses() {
  const [courses, setCourses] = useState([]);

  function takeSome(array) {
    let someCourses = [];
    
    for (let i=0; i<20; i++) {
      someCourses.push(array[i]);
    }
  
    return someCourses;
  }

  useEffect(() => {
    coursesRepository.getAll()
      .then((allCourses) => {
        setCourses(takeSome(allCourses));
      });
  }, []);

  return (
    <>
      <Topbar />

      <CoursesList courses={courses} />
    </>
  );
}

export default Courses;
