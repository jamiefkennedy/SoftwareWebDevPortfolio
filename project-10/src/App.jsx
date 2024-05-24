import { useState, useEffect } from "react";
import supabase from "/src/config/supabaseClient.jsx";
import "./App.css";

function App() {
  // State to store the contacts and the new contact input value
  const [contacts, setContacts] = useState([]); 
  const [newContact, setNewContact] = useState(""); 

  // UseEffect hook to run fetchContacts function when the component mounts
  useEffect(() => {
    fetchContacts();
  }, []);

  // Define a fetchContacts function
  const fetchContacts = async () => {
    // Fetch logic here
    const { data, error } = await supabase.from("contacts").select();
    if (error) {
      console.log(error);
    }
    setContacts(data);
  };

  // Define an addContact function
  const addContact = async (e) => {
    // Add logic here
    e.preventDefault();
    if (!newContact) return;
    const { error } = await supabase.from("contacts").insert({name: newContact.name, phone_number: newContact.phone_number});
    if (error) {
      console.log(error);
    }
    fetchContacts();
    setNewContact({name: "", phone_number: ""});
  };

  // Define a deleteContact function
  const deleteContact = async (contactId) => {
    // Delete logic here
    const { error } = await supabase.from("contacts").delete().eq("id", contactId);
    if (error) {
      throw new Error("Failed to delete contact");
    }
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div className="App">
      <h1>Contacts App</h1>
      <div className="contacts-container">
        <form onSubmit={addContact}>
          <input
            type="text"
            placeholder="Add a new contact"
            value={newContact.name}
            onChange={(e) => setNewContact({name: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Enter a 10-digit phone number with dashes"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={newContact.phone_number}
            onChange={(e) => setNewContact({...newContact, phone_number: e.target.value})}
            required
          />
          <button type="submit">Add Contact</button>
        </form>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <span className="contact-name">{contact.name}</span>
              <span className="phone-label">Phone</span>
              <span className="phone-number">{contact.phone_number}</span>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

