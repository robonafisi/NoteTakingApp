import React, { useEffect, useState } from 'react';
import './sidebar.css';


export default function Sidebar() {

  const [getPages, setPages] = useState([]);

  const getContent = async() =>{
    try {
      const response = await fetch("http://localhost:5000/pages");
      const jsonData = await response.json();
  
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  useEffect(()=>{
    getContent();
  });
  return (
    <div>
      <div>
        <ul>
          <li><p>Home</p></li>
          <li className='breakline'><p>Pages</p></li>
          <li className='breakline'>
            <p>Format</p>

          </li>
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

