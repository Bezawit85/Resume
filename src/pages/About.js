import React from 'react'
import './about.css';
import Navbar from './Navbar';
import me from '../assets/me.jpg';

const About = () => {
  return (
    <div className='about'>
<div id='about' className='section'>
      <Navbar />
      <div className='section1'>
      <h1>About me</h1>
      <div className='text'>
          <p>I'm Bezawit Eshetu. I am a passionate website designer, driven to discover innovative solutions
             and committed to personal and professional growth. I bring a range of relevant skills and experience
              to the table. Let's connect and explore the possibilities together!</p>
        </div>
        </div>
        </div>
        <br />
      <div className='skill'>
          <img className='img' src={me} alt='Profile' />
          <h2>Skills</h2>
          <h2>Skills</h2>
          <h2>Skills</h2>
        </div>
    </div>
  )
}

export default About