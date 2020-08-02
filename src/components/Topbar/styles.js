import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--primary);
  width: 100%;

  color: var(--white);
  font-size: 11px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 12px;
    font-weight: bold;
  }
`;

Header.Nav = styled.nav`
  display: flex;
  align-items: center;

    img {
      width: 65px;

    @media (min-width: 768px) {
      width: 70px;
    }
  }
`;

Header.Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  margin: auto;

  span {
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: .6;
    }
  }
`;

export const HeaderContainer = styled.div`
  padding: 1% 5%;
`;
