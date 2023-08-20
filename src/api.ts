// src/api.ts
export async function fetchContacts() {
    const response = await fetch('https://your-api-url/contacts'); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
  
