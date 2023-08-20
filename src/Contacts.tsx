User
import React from 'react';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const Contacts: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactList />
        <div className="md:col-span-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
      <div>
        <Link to="/charts">Go to Charts</Link>
        <Link to="/maps">Go to Maps</Link>
      </div>
    </div>
  );
};

export default Contacts;

