import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, fetchContacts } from "../../redux/contacts/api.js";
import Loader from "../Loader/Loader.jsx";
import {
  filteredContacts,
  getError,
  getIsLoading,
} from "../../redux/contacts/selectors.js";
import { ButtonTable, Table, TableBody, TableData, TableHeader, Thead } from "./ContactList.styled.js";

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
    <Table>
      <Thead>
        <tr>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Birthday</TableHeader>
          <TableHeader>Phone Number</TableHeader>
          <TableHeader>Action</TableHeader>
        </tr>
      </Thead>
      <TableBody>
        {contactItems.map((table) => (
          <tr key={table.id}>
            <TableData>{table.name}</TableData>
            <TableData>{table.email}</TableData>
            <TableData>{table.birthday_date}</TableData>
            <TableData>{table.phone_number}</TableData>
            <TableData>
              <ButtonTable onClick={() => dispatch(deleteContacts(table.id))}>Delete</ButtonTable>
            </TableData>
          </tr>
        ))}
      </TableBody>
    </Table>
  );
};
export default ContactList;