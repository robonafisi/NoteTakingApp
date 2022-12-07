import React, { useEffect, useState } from 'react';
import './sidebar.css';
import App from './App.js';



export default function Sidebar(props) {


  function PageSelect(id){
   
  };

  return (
    <div>
      <div>
        <ul>
          <li><p>Home</p></li>
          <li className='breakline'>
            <p>Pages</p>
            {props.pages.map(contentunit => (
              <button
              id={contentunit.id}
              onClick={e => setPages(e.target.id)}
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
    </div>
  )
}