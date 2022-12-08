import React, { useEffect, useState } from 'react'
import './App.css';


export default function App() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:5000/pages/10');
      const jsonresult = await  result.json();
      setInfo(jsonresult);
    }
    fetchData();
  },[])

  console.log(info);

  return (
    <div className='container text-center'>
      <div>
        <div>
      <h1>
        
      </h1>
      <div>
      <p>
        
      </p>
      </div>
      </div>
      </div>
    </div>
  )
}
