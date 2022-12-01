import React { useEffect, useState } from 'react';
import './writingarea.css';



export default function writtingarea() {

  const [content, setContent] = useState([]);

  const getContent = async() =>{
    try {
      const response = await fetch(`http://localhost:5000/pages/${.content}`);
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
