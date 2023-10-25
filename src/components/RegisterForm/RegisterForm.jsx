import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { register } from '../../redux/auth/operations.js';

const Form = styled.form`
  width: 320px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #3f41b5;
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
  margin-bottom: 10px;
`;

const Button = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  margin-right: auto;
  border-radius: 4px;
  padding: 6px 10px;
  border: 1px solid #3f41b5;
  background-color: #fff;
  color: #3f41b5;

  &:hover,
  &:focus {
    background-color: #3f51b5;
    color: #fff;
    border: 1px solid #3f41b5;
  }
`;

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="username" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" title="Enter at least 3 figures and 3 letters" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
