import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <h1>ABOUT</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adip</h2>

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
