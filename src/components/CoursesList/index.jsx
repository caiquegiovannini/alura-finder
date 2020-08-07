import React from 'react';

import { CoursesContainer } from './styles';

import Course from "./Course";

function CoursesList({ courses, levelName }) {
  return (
    <CoursesContainer>
      {
        courses.map((course) => (
          <Course key={course.slug} course={course} levelName={levelName} />
        ))
      }
    </CoursesContainer>
  );
}

export default CoursesList;
