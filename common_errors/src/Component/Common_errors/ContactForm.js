import React, { useState } from 'react';
import './Style.css'

function ContactForm() {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Perform validation (optional)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Handle form submission logic (e.g., send data to server)
    console.log('Form submitted:', { name, email, message });

    // Clear form after successful submission (optional)
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
       <h1>Sample OutPut</h1>
       <h2>Console log to see output</h2>
        {/* Name input */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleChange} />
        <br />

        {/* Email input */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleChange} />
        <br />

        {/* Message textarea */}
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={message} onChange={handleChange} />
        <br />

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
      <hr></hr>
    </div>
  );
}

export default ContactForm;
