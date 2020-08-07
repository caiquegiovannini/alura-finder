import styled from 'styled-components';

export const FinderSection = styled.section`
  background-color: var(--primary);
  width: 100%;
  height: 91vh;
  flex: 1;

  color: var(--white);

  @media (min-width: 768px) {
    height: 88vh;
  }
`;

export const FinderContainer = styled.div`
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;
`;

export const FinderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;

  @media (min-width: 780px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const PauloSilveira = styled.div`
  position: relative;

  margin-top: 25px;
  width: 50%;

  @media (min-width: 780px) {
    margin-top: 50px;
    width: 30%;
  }
`;

PauloSilveira.Body = styled.img`
  width: 100%;
`;

PauloSilveira.HeadThinking = styled.img`
  position: absolute;

  top: -31%;
  left: 16%;
  width: 85%;

  z-index: 5;

  @keyframes spin {
    0% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(2) rotate(180deg);
    }
    100% {
      transform: scale(1) rotate(360deg);
    }
  }
`;

PauloSilveira.HeadHappy = styled.img`
  position: absolute;

  top: -31%;
  left: 16%;
  width: 64%;

  display: none;
`;

export const Speech = styled.div`
  background-color: var(--white);
  border-radius: 12px;
  max-height: 336px;
  padding: 2em;

  position: relative;
  z-index: 1;

  color: #000;
  font-size: 0.4rem;

  &:after {
    content: '';
    position: absolute;
    background-color: #fff;

    width: 30px;
    height: 69px;
    top: -21px;
    left: 169px;

    transform: rotate(45deg);
    z-index: -1;
  }

  h1 {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }

  @media (min-width: 780px) {
    font-size: 1rem;
    width: 60%;
    max-width: 550px;
    max-height: initial;

    :after {
      top: 12%;
      left: 0;
    }

    h1 {
      font-size: 1rem;
      line-height: 1.7rem;
    }
  }
`;

Speech.List = styled.div`
  height: 60%;
  overflow: auto;

  @media (min-width: 780px) {
    height: 75%;
  }
`;

export const ListLabels = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 1fr;
  padding: 1rem;
  margin-top: 20px;
  border: 1px solid var(--border);
  box-shadow: 4px 4px 20px 0 rgba(120,135,182,.1);
`;

ListLabels.Label = styled.div`
  width: 100%;

  h2 {
    font-size: 0.85rem;
  }
`;

export const FormField = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  font-size: 0.8rem;

  select,
  input {
    display: block;
    font-size: 0.9rem;
    padding: 2px 4px;
    margin-top: 5px;
    outline: 0;
    color: #111;
  }

  input {
    width: 100%;
  }

  @media (min-width: 780px) {
    font-size: 0.9rem;

    select,
    input {
      font-size: 1rem;
    }
  }
`;

export const Button = styled.button`
  background-color: var(--secondary);
  padding: 12px 9px;
  width: 100%;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  outline: 0;

  color: white;
  font-size: 1rem;
  
  cursor: pointer;
  transition: .2s;

  &:hover {
    opacity: .9;
  }

  @media (min-width: 780px) {
    position: initial;
    padding-top: 16px;
    padding-bottom: 16px;
    width: 10rem;
    margin-top: 30px;

    font-size: 1.3rem;
  }
`;