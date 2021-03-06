import React from 'react';
import { Link } from 'react-router-dom';

import { Header, HeaderContainer } from './styles';

import Logo from '../../assets/img/alura-finder-logo.png';

function Topbar() {
  return (
    <Header>
      <HeaderContainer>
        <Header.Nav>
          <Link to="/">
            <img src={Logo} alt="alura-finder logo"/>
          </Link>

          <Header.Links>
            <Link to="/courses">
              <span>Cursos</span>
            </Link>

            <Link to="/completed">
              <span>Finalizados</span>
            </Link>

            <a href="https://www.alura.com.br/">
              <span>Alura</span>
            </a>
          </Header.Links>
        </Header.Nav>
      </HeaderContainer>
    </Header>
  );  
}

export default Topbar;