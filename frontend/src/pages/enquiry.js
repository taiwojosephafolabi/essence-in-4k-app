import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

function enquiryForm() {
  return (
    <div className='App'>
      <Navbar
      />
      <h1>
        Want to
        <br />
        work with us?
      </h1>
      <h2>
        Fill in the form with your details:
      </h2>
      <form
        class='form'
        action='https://formsubmit.co/info.jtafolabi@gmail.com'
        method='POST'
      >
        <input type='hidden' name='_subject' value='New Email!' />
        <input
          type='text'
          name='name'
          placeholder='Your Full Name...'
          required
        />
        <br />
        <input
          type='email'
          name='email'
          placeholder='Your Email Address...'
          required
        />
        <br />
        <input
          id='message'
          type='text'
          name='message'
          placeholder='Your Message...'
          required
        />
        <br />
        <input
          type='text'
          name='location'
          placeholder='Where is your special occasion?'
          required
        />
        <br />
        <button type='submit'>Send</button>
        <input type='hidden' name='_captcha' value='false' />
        <input type='hidden' name='_next' value='enquiry-confirmation.js' />
      </form>
    </div>
  );
}

export default enquiryForm;
