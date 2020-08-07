import styled from 'styled-components';

export const CourseContainer = styled.div`
  border: solid 1px var(--border);
  box-shadow: 4px 4px 20px 0 rgba(120,135,182,.1);
  width: 100%;
  padding: 1em 1.5rem;
  margin: 1em 0;

  cursor: pointer;
`;

export const CourseContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 0.4rem;
  }
`;
