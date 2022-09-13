import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mvozjjt', 'template_2o5v1wz', form.current, 'Txo8nMBF9Z5sccG2Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <br>
      </br>
      <input className='btn btn-dark' type="submit" value="Send" />
    </form>
  );
};

export default Contact;