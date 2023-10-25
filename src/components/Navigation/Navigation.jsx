import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth.js';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 14px;

  @media screen and (max-width: 560px) {
    font-size: 14px;
  }
`;

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #e84a5f;
  }

  &:hover {
    color: #3f41b5;
  }

  @media screen and (max-width: 560px) {
    text-decoration: none;
    padding: 6px;
    font-weight: 500;
    color: #2a363b;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/table">Contacts</Link>}
    </Nav>
  );
};
