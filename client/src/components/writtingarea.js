import React from 'react';
import './writingarea.css';
import Sidebar from './sidebar.js';


export default function Writtingarea() {

  return (
    <div>
    {/* <div>
      <Sidebar mainContent={}/>
    </div> */}
    <div className='container inputcontainer'>
        <textarea className='inputarea' name="Text1" cols="100" rows="5"></textarea>
    </div>
    <div>
        <button className='savebutton'>Save</button>
        <button className='editbutton'>Edit</button>
        <button className='deletebutton'>Delete</button>
    </div>
    <div>
        <button className='addsectionbutton'>Add Section</button>
    </div>
    </div>
  )
}
