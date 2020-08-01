import React, { useEffect, useState } from 'react';
import coursesRepository from '../../repositories/courses';

import Topbar from '../../components/Topbar';
import Courses from '../../components/Courses';

function Home() {
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

      <Courses courses={courses} />
    </>
  );
}

export default Home;
