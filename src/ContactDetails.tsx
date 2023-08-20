import React, { useState } from 'react';

const ContactDetails: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState({
    id: 0,
    name: '',
    email: '',
  });

  const handleContactClick = (contact: any) => {
    setSelectedContact(contact);
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-2">Contact Details</h2>
      <p className="mb-2">
        <strong>Name:</strong> {selectedContact.name}
      </p>
      <p className="mb-2">
        <strong>Email:</strong> {selectedContact.email}
      </p>
    </div>
  );
};

export default ContactDetails;

import React from 'react';
import { useSelector } from 'react-redux';

const ContactDetails: React.FC<{ id: number }> = ({ id }) => {
  const contact = useSelector((state: RootState) =>
    state.contacts.find((c) => c.id === id)
  );

  // ... rest of the component
};

export default ContactDetails;

import React from 'react';
import { useSelector } from 'react-redux';

const ContactDetails: React.FC<{ id: number }> = ({ id }) => {
  const contact = useSelector((state: RootState) =>
    state.contacts.find((c) => c.id === id)
  );

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{contact.name}</h2>
      <p className="text-gray-600">{contact.email}</p>
    </div>
  );
};

export default ContactDetails;

