import React, { useState } from 'react';
//changes in the state varible changes in the dom
import {validateEmail} from '../../utils/helpers'

function Contact() {
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

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if(fullName === ''){
      setMessage('Name cannot be empty')
      return;
      }
      if(email === ''){
        setMessage('Email cannot be empty')
        return;
        }
        if(text === ''){
          setMessage('Text cannot be empty')
          return;
          }
          if(!validateEmail(email)){
            setMessage('Invalde email make sure to have @(domain name here).com')
            return;
          }
          setMessage('Message has been sent thank you')

   
  };

  return (
    <><div>
      <h1 id="about" className="section-title primary-border">
        Contact Me
      </h1>
    </div>
    <div className='contact'>
        <form className="contact-form">
          <input
            value={fullName}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter name here" />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter email here" />
          <textarea
            value={text}
            name='text'
            onChange={handleInputChange}
            type="text"
            placeholder='Enter message here'>
          </textarea>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        <p>{message}</p>
      </div></>
  );
}

export default Contact;