import React, { useEffect, useState } from 'react';
import coursesRepository from '../../repositories/courses';

import Topbar from '../../components/Topbar';
import Finder from '../../components/Finder';
import CoursesList from '../../components/CoursesList';

function Home() {
  const [coursesFinded, setCoursesFinded] = useState([]);
  const [courseLevels, setCourseLevels] = useState([]);

  function handleFind(courses) {
    setCoursesFinded(courses);
  }

  useEffect(() => {
    coursesRepository.getAll()
      .then((allCourses) => {
        const levels = allCourses.map((course) => {
          return course.nivel;
        });

        const uniqueLevels = levels.reduce((unique, item) => {
          return unique.includes(item) ? unique : [...unique, item]
        }, []);

        setCourseLevels(uniqueLevels);
      });
  }, []);

  return (
    <>
      <Topbar />

      <Finder levels={courseLevels} setCourses={handleFind} />

      <CoursesList courses={coursesFinded} />
    </>
  );
}

export default Home;