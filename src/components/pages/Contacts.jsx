import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getIsLoading } from '../../redux/contacts/selectors.js';
import { ContactForm } from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import Filter from '../Filter/Filter.jsx';
import Loader from '../Loader/Loader.jsx';
import { ContactContainer, ContactPage } from './pages.styled.js';


export default function Contacts() {

  const isLoading = useSelector(getIsLoading);

  return (
    <>
      <ContactPage>
          <div>
      <Helmet>
        <title>Your Contacts filter</title>
      </Helmet>
      <div>{isLoading && <Loader/>}</div>
      <Filter />
      </div>
        <Helmet>
        <title>Your Contacts</title>
      </Helmet>
        <ContactForm />
        <div>{isLoading && <Loader/>}</div>
         <ContactContainer>
         <div>
      <ContactList />
        </div>
      </ContactContainer>
</ContactPage>
    </>
  );
}