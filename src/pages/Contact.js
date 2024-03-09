import React from 'react';
import './contact.css';
import Navbar from './Navbar';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
  const facebookPageUrl = 'https://www.facebook.com/your-page'; // Replace with your actual Facebook page URL

  return (
    <div id='contact' className='contact'>
      <Navbar />
      Contact Me
      <div>
        <a href={`https://www.facebook.com/bezawit.eshetu.58/`} target="_blank" rel="noopener noreferrer" className='facebook-link'>
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
};

export default Contact;
