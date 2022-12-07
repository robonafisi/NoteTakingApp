import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Writtingarea from './components/writtingarea';


export default function App(props) {

  const [pages, setPages] = useState([]);

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

  console.log("Parent",pages);

  return (
    <div>
      <div>
      <Sidebar pages={pages}/>
      </div>
    <div>
      <Writtingarea />
    </div>
    <div className='container text-center'>
      <div>
      
        <div>
      <h1>
        {props.title}
      </h1>
      <div>
      <p>
        {props.body}
      </p>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

