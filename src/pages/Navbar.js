import React from 'react'
import './navigation.css';

const Navbar = () => {
  return (
    <div className='navigation'>
        <h2>Resume</h2>
        <ul>
            <li>
              <a href="/" className='lists'>
              Home
            </a>
            </li>
            <li>
            <a href="/about"  className='lists'>
              About
            </a>
            </li>
            <li>
            <a href="/projects"  className='lists'>
              Projects
            </a>
            </li>
            <li>
            <a href="/blog"  className='lists'>
              Blog
            </a>
            </li>
            <li>
            <a href="/contact"  className='lists'>
              Contact
            </a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar