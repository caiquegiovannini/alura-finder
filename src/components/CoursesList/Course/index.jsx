import React from 'react';

import { CourseContainer, CourseContent } from './styles';

function Course({ course }) {
  return (
    <CourseContainer>
      <CourseContent>
        <h1>{course.nome}</h1>
      </CourseContent>
    </CourseContainer>
  );
}

export default Course;
