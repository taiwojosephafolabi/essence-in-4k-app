import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <h1>
        SITE
        <br />
        COMING SOON
      </h1>
      <a
        className='App-link'
        linkto='./enquiry'
        href='./enquiry'
        rel='noopener noreferrer'
      >
        Enquire
      </a>
      <a
        className='App-link'
        href='https://www.instagram.com/essence.in.4k'
        target='_blank'
        rel='noopener noreferrer'
      >
        Instagram
      </a>
    </div>
  );
}

export default App;
