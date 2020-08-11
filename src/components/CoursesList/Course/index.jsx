import React from 'react';

import { CourseContainer, CourseContent } from './styles';

function Course({ course, levelName }) {
  return (
    <CourseContainer>
      <CourseContent href={`https://alura.com.br/curso-online-${course.slug}`} target="_blank">
        <h2>{course.nome}</h2>

        <h3>{levelName}</h3>

        <h3>{course.tempo_estimado} h</h3>
      </CourseContent>
    </CourseContainer>
  );
}

export default Course;
