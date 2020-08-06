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
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 10%;
`;

export const FinderContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const PauloSilveira = styled.div`
  position: relative;

  margin-top: 50px;
  width: 35%;
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
  width: 60%;
  max-width: 550px;
  padding: 2em;

  position: relative;
  z-index: 1;

  color: #000;
  font-size: 0.4rem;

  @media (min-width: 780px) {
    font-size: 1rem;
  }

  &:after {
    content: '';
    position: absolute;
    background-color: #fff;

    width: 30px;
    height: 69px;
    top: 12%;
    left: 0;

    transform: rotate(45deg);
    z-index: -1;
  }

  h1 {
    font-size: 0.9rem;
    line-height: 1.7rem;

    @media (min-width: 780px) {
      font-size: 1rem;
    }
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
  width: 8rem;
  border: none;
  border-radius: 4px;
  margin-top: 30px;
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

    font-size: 1.3rem;
  }
`;