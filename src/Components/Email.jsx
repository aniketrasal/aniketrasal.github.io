import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1a2i4h2', 'template_fxkrb4k', form.current, 'NldvSiBnLuSx1rpk_')
      .then((result) => {
        console.log(result.text);
        alert("message sent")
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <label className='label' >Name</label>
      <input className='input' type="text" name="user_name" placeholder="Enter your name" />
      <label className='label'>Email</label>
      <input className='input' type="email" name="user_email" placeholder="Enter your email" />
      <label>Message</label>
      <textarea className='textarea' name="message" placeholder="Enter your message" />
      <input className='input' type="submit" value="Send Message" />
    </form>
  );
};

