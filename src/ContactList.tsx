// store.ts
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;

// contactActions.ts
export const deleteContact = (id: number) => {
    return {
      type: 'DELETE_CONTACT',
      payload: id,
    };
  };
  
  // contactReducer.ts
  const initialState: Contact[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];
  
  const contactReducer = (state = initialState, action: ContactAction): Contact[] => {
    switch (action.type) {
      case 'DELETE_CONTACT':
        return state.filter(contact => contact.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default contactReducer;
  
  // reducers.ts
import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  // Add more reducers if needed
});

export default rootReducer;

// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// ContactList.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './contactActions';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  // ... rest of your component
};

export default ContactList;

// src/components/ContactList.tsx
import React from 'react';
import { useQuery } from 'react-query';
import { fetchContacts } from '../api'; // Import the fetchContacts function

const ContactList: React.FC = () => {
  const { data: contacts, error, isLoading } = useQuery('contacts', fetchContacts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-2">Contact List</h2>
      <ul className="space-y-2">
        {contacts.map((contact: any) => (
          <li key={contact.id} className="bg-white rounded-lg p-4 shadow-md">
            <span className="text-blue-500 cursor-pointer">{contact.name}</span>
            <p className="text-gray-600">{contact.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;


import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { deleteContact } from './contactActions';
import { fetchContacts } from '../api'; // Import the fetchContacts function

const ContactList: React.FC = () => {
  const dispatch = useDispatch();

  const { data: contacts, error, isLoading } = useQuery('contacts', fetchContacts);

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-2">Contact List</h2>
      <ul className="space-y-2">
        {contacts.map((contact: any) => (
          <li key={contact.id} className="bg-white rounded-lg p-4 shadow-md">
            <span className="text-blue-500 cursor-pointer">{contact.name}</span>
            <p className="text-gray-600">{contact.email}</p>
            <button
              onClick={() => handleDelete(contact.id)}
              className="bg-red-500 text-white py-1 px-2 rounded mt-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
