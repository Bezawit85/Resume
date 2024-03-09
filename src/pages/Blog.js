import React from 'react'
import './blog.css';
import Navbar from './Navbar';

const Blog = () => {
  return (
    <div id='blog' className='blog'>
      <Navbar />
      <div className='items'>
      <h2>Blog 1</h2>
      <h2>Blog 2</h2>
      <h2>Blog 3</h2>
    </div>
    </div>
  )
}

export default Blog