import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: [e.target.value]});
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", padding: "5px" }}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0", padding: "5px" }}
        />
        <textarea
          name="message" value={formData.message} onChange={handleChange} placeholder="Your Message"
          style={{ display: "block", margin: "10px 0", padding: "5px" }}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
