import React from 'react';

import { CourseContainer, CourseContent } from './styles';



function Course({ course, levelName }) {
  return (
    <CourseContainer>
      <CourseContent>
        <h2>{course.nome}</h2>

        <h3>{levelName}</h3>

        <h3>{course.tempo_estimado} h</h3>
      </CourseContent>
    </CourseContainer>
  );
}

export default Course;
