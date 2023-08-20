// api.js
import axios from 'axios';

const fetchContacts = async () => {
  const response = await axios.get('/api/contacts'); // Replace with your API endpoint
  return response.data;
};

export { fetchContacts };
