import React, { useState } from 'react';
//changes in the state varible changes in the dom
import {validateEmail} from '../../utils/helpers'
import emailjs from 'emailjs-com';

function Contact() {
  emailjs.init('user_xggWJPgNCSawp_uj6QEGo');
  // Here we set two state variables for firstName and lastName using `useState`
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    if(name === 'name'){
      setName(value)
    }
    else if (name === 'email'){
      setEmail(value)
    }
    else {
      setText(value)
    }
  };

  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    if (fullName === '') {
      setMessage('Name cannot be empty');
      return;
    }
    if (email === '') {
      setMessage('Email cannot be empty');
      return;
    }
    if (text === '') {
      setMessage('Text cannot be empty');
      return;
    }
    if (!validateEmail(email)) {
      setMessage('Invalid email, make sure to have @(domain name here).com');
      return;
    }
  
    try {
      const response = await emailjs.send(
        'service_1m8fw0g', // Replace with your service ID from EmailJS
        'template_c56ydyh', // Replace with your template ID from EmailJS
        { name: fullName, email: email, text: text },
        // 'user_xggWJPgNCSawp_uj6QEGo'
        
      );
  
      if (response.status === 200) {
        setMessage('Message has been sent, thank you');
      } else {
        setMessage('Error sending message, please try again');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessage('Error sending message, please try again');
    }
  };
  


  return (
    <><div>
      <h1 id="about" className="section-title primary-border">
        Contact Me
      </h1>
    </div>
    <div className='contact'>
    <form className="contact-form" onSubmit={handleFormSubmit}>
  <input
    value={fullName}
    name="name"
    onChange={handleInputChange}
    type="text"
    placeholder="Enter name here"
  />
  <input
    value={email}
    name="email"
    onChange={handleInputChange}
    type="text"
    placeholder="Enter email here"
  />
  <textarea
    value={text}
    name='text'
    onChange={handleInputChange}
    type="text"
    placeholder='Enter message here'>
  </textarea>
  <button type="submit">
    Submit
  </button>
</form>
        <p>{message}</p>
      </div></>
  );
}

export default Contact;