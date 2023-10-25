import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth.js';
import { logOut } from '../../redux/auth/operations.js';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Username = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

const Button = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  border: 1px solid #3f41b5;
  border-radius: 4px;
  padding: 6px 10px;
  background-color: #3f41b5;
  color: #fff;

  &:hover,
  &:focus {
    border: 1px solid #3f41b5;
    background-color: #fff;
    color: #3f41b5;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();


  return (
    <Wrapper>
      <Username>Welcome! {user}</Username>
     
      <Button type="button" onClick={() => dispatch(logOut())}>
        logout
      </Button>
    </Wrapper>
  );
};

