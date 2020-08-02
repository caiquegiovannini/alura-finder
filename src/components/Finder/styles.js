import styled from 'styled-components';

export const FinderSection = styled.section`
  background-color: var(--primary);
  width: 100%;
  height: 100vh;

  color: var(--white);
`;

export const FinderContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 10%;
`;

export const FinderContent = styled.div`
  display: flex;
`;

export const PauloSilveira = styled.div`
  position: relative;

  width: 40%;
`;

PauloSilveira.Body = styled.img`
  width: 100%;
`;

PauloSilveira.Head = styled.img`
  position: absolute;

  top: -31%;
  left: 16%;
  width: 85%;
`;

export const Speech = styled.div`
  background-color: var(--white);
  border-radius: 12px;
  width: 60%;
  padding: 1em;

  position: relative;
  z-index: 1;

  color: #000;

  &:after {
    content: '';
    position: absolute;
    background-color: #fff;

    width: 26%;
    height: 44%;
    top: 12%;
    left: 0;

    transform: rotate(45deg);
    z-index: -1;
  }
`;

export const FormField = styled.div`
  width: 100%;
`;