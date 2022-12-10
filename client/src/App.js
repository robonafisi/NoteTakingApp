import React, { useEffect, useState } from 'react'
import './App.css';


export default function App() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:5000/pages/11');
      const jsonresult = await  result.json();
      setInfo(jsonresult);
    }
    fetchData();
  },[])

  return (
    <div className='container'>
      <div>
        <div>
        {info.map(information => (
          <div>
          <h1>{information.page_title}</h1>
            <p>{information.content}</p>
          </div>
        ))}
      <div>
      </div>
      </div>
      </div>
    </div>
  )
}
