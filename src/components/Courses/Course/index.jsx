import React from 'react';

import { CourseContainer } from './styles';

function Course({ course }) {
  return (
    <CourseContainer>
      <h1>{course.nome}</h1>
    </CourseContainer>
  );
}

export default Course;
