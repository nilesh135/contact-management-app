import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from './contactActions';

interface ContactFormProps {
  contact?: Contact;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact ? contact.name : '');
  const [email, setEmail] = useState(contact ? contact.email : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact) {
      dispatch(editContact({ ...contact, name, email }));
    } else {
      dispatch(addContact({ id: Date.now(), name, email }));
    }
    // Clear form
    setName('');
    setEmail('');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">
        {contact ? 'Edit Contact' : 'Add New Contact'}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {contact ? 'Edit Contact' : 'Add Contact'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
