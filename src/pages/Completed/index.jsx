import React from 'react';
import styled from 'styled-components';

import Topbar from '../../components/Topbar';

// import { Container } from './styles';

import UnderConstructionImg from '../../assets/img/under-construction.svg';

const CompletedWrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex:1;
  
  h2 {
    font-size: 1.5rem;
    margin-top: 20px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 40%;
  min-width: 330px;

  img {
    width: 100%;
  }
`;

function Completed() {
  return (
    <>
      <Topbar />
      
      <CompletedWrapper>
        <ImageContainer>
          <img src={UnderConstructionImg} alt="Em construção"/>
        </ImageContainer>

        <h2>Em construção</h2>
      </CompletedWrapper>
    </>
  );
}

export default Completed;