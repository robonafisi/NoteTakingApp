import React from 'react'
import './sidebar.css';

export default function sidebar() {
  return (
    <div>
      <div>
        <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><p className='sidebar-section'>Pages</p></li>
          <li><p className='sidebar-section'>Format</p></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </div>
  )
}

