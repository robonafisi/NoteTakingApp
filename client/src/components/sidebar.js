import React, { useEffect, useState } from 'react';
import './sidebar.css';
import WrittingArea from './writtingarea.js';


export default function Sidebar() {
  
  //The state to keep track of the list of pages
  const [pages, setPages] = useState([]);

  //The state to keep track of the active page
  const [activepage, setActivepage] = useState([]);

  //Call the page API to get the active page
  const getActivepage = async e =>{
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/pages/${idcode}`);
      const jsonPagedata = await response.json();
      setActivepage(jsonPagedata);
    } catch (error) {
      console.error(err.message);
    }
  };

  //Call the pages API to get the list of pages
  const getContent = async() =>{
    try {
      const response = await fetch("http://localhost:5000/pages");
      const jsonData = await response.json();
      setPages(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  useEffect(()=>{
    getContent();
  },[]);

  return (
    <div>
      <div>
        {/* <WrittingArea contentBody={pageContent}/> */}
      </div>
      <div>
        <ul>
          <li><p>Home</p></li>
          <li className='breakline'>
            <p>Pages</p>
            {pages.map(contentunit => (
              <button
              onClick={e => getActivepage(contentunit.id)}
              className='page_list'>
              {contentunit.page_title}</button>
            ))}
            
          </li>
            
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
      <div>
      </div>
    </div>
  )
}