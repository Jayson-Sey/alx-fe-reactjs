import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const containerStyle = {
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const inputStyle = {
    display: 'block',
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    maxWidth: '400px'
  };

  return (
    <div style={containerStyle}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: '100px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;