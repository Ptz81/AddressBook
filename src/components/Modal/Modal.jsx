import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { correctContact, fetchContacts } from '../../redux/contacts/api';

function ModalForm({ table, onClose }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
  
  useEffect(() => {
    setEmail(table.email);
      setName(table.name);
      setNumber(table.number);
      setEmail(table.email);
      setDate(table.date);
    
  }, [table]);
   
  const handleClose = () => {
    onClose();
  };

 const handleSave = () => {
  dispatch(correctContact(table.id, email, name, number, date ))
    .then(() => {
      onClose(); 
      dispatch(fetchContacts()); 
    });
};


  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
                value={name}
              onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={number}
              onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ControlTextarea1"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ControlTextarea1"
            >
            <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date of birthday"
                value={date}
              onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;

ModalForm.propTypes = {
  table: PropTypes.object,
  onClose: PropTypes.func,

};