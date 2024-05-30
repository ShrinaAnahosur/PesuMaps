
import React from 'react'
import 'jquery/dist/jquery.slim.min';
import 'popper.js/dist/umd/popper.min';



// ContactForm.jsx
const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have a function to send the data to the server
    // You may replace this with your actual endpoint
    const response = await sendMessageToServer(formData);

    if (response.ok) {
      console.log('Message sent successfully!');
      // You can perform further actions here, e.g., show a success message
    } else {
      console.error('Failed to send message');
    }
  };

  const sendMessageToServer = async (data) => {
    // Adjust the URL to match your server endpoint
    const response = await fetch('http://localhost:3001/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="message">Your Message:</label>
        <div class="form-group">
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
            <label for="message">Your Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        </div>
      </div>
      <div className="form-group">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};


export default ContactForm;
