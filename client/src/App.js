import React from 'react'
import './App.css';


export default function App(props) {

  // const getPageInfo = async e =>{
  //   e.preventDefault();
  //   try {
  //     const body = {  };
  //     const response = await fetch("http://localhost:5000/pages");
  //     const jsonData = await response.json();
  
  //     setPages(jsonData);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  return (
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
  )
}
