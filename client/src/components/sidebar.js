import React from 'react'
import './sidebar.css';

export default function sidebar() {
  return (
    <div>
      <div>
        <ul>
          <li className='breakline'><p>Home</p></li>
          <li className='breakline'><p>Pages</p></li>
          <li className='breakline'><p>Format</p></li>
          <li>
            <button className='sidebuttons'>Bold</button>
            <button className='sidebuttons'>Italicize</button>
            <button className='sidebuttons'>Bigger</button>
            <button className='sidebuttons'>Smaller</button>
            <button className='sidebuttons'>Colorize</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

