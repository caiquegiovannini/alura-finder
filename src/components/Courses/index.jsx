import React from 'react';

import { CoursesContainer } from './styles';

import Course from "./Course";

function Courses({ courses }) {
  return (
    <CoursesContainer>
      {
        courses.map((course) => (
          <Course key={course.slug} course={course} />
        ))
      }
    </CoursesContainer>
  );
}

export default Courses;
