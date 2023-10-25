import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
`;

export const AuthNav = () => {
  return (
    <div>
      {/* <Link to="/register">Register</Link> */}
      <Link to="/login">Login</Link>
    </div>
  );
};
