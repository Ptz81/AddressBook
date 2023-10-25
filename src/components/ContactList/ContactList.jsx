import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, fetchContacts } from "../../redux/contacts/api.js";
import Loader from "../Loader/Loader.jsx";
import {
  filteredContacts,
  getError,
  getIsLoading,
} from "../../redux/contacts/selectors.js";
import styled from 'styled-components';

// const List = styled.ul`
//   padding: 0;
//   margin: 0;
//   list-style: none;
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 2px;

//   @media screen and (max-width: 560px) {
//     margin-bottom: 30px;
//   }
// `;

// const Contact = styled.p`
//   font-size: 16px;
//   text-transform: uppercase;
//   font-weight: 500;
//   color: rgba(83, 32, 107, 0.815);
// `;

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

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

const ContactList = () => {
  const contactItems = useSelector(filteredContacts);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!contactItems || contactItems.length === 0) {
    return;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Birthday</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contactItems.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.birthday_date}</td>
            <td>{contact.phone_number}</td>
            <td>
              <Button onClick={() => dispatch(deleteContacts(contact.id))}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ContactList;