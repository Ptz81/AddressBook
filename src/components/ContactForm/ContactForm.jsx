import { useDispatch, useSelector } from 'react-redux';
import { createContacts, fetchContacts } from '../../redux/contacts/api.js';
import { getContacts } from '../../redux/contacts/selectors.js';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  margin-bottom: 12px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
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
  padding: 8px 12px;
  background-color: #3f51b5;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.phone.value;
    const validNumber = /^(\+\d{3,}[-.\s]?(\(\d{1,3}\))?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})$/.test(number);
    const email = e.currentTarget.elements.email.value;
    const birthday = e.currentTarget.elements.birthday.value;

    if (!validNumber) {
      alert('Invalid phone number. Please enter a valid phone number in format:+xxxxxxxxx');
      return;
    }

    if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }

      dispatch(createContacts({ name, phone: number, email, birthday }))
      .then(() => {
        e.currentTarget.reset(); 
        dispatch(fetchContacts()); 
      });
  };
  
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="name">
        Name
      </label>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder='Name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="phone">
        Number
      </label>
      <Input
        type="tel"
        name="phone"
        placeholder='Phone number +xxxxxxxxx'
        id="phone"
        pattern="(\+\d{1,4}[-.\s]?(\(\d{1,3}\))[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <label htmlFor="email">
        Email
      </label>
      <Input
        type="email"
        name="email"
        placeholder='Email'
        id="email"
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        title="Please check the email"
        required
      />
      <label htmlFor="birthday">
        Date of Birth
      </label>
      <Input
        type="date"
        name="birthday"
        id="birthday"
        title="Please enter number, month and year"
        required 
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
