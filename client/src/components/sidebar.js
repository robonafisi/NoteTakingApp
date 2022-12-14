import React, { useEffect, useState } from 'react';
import './sidebar.css';


export default function Sidebar() {

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

  async function fetchData(id) {

      const http = require('https')
      https.get('https://jsonplaceholder.typicode.com/users', res => {
  let data = [];
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);

  res.on('data', chunk => {
    data.push(chunk);
  });

  res.on('end', () => {
    console.log('Response ended: ');
    const users = JSON.parse(Buffer.concat(data).toString());

    for(user of users) {
      console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    }
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
  };
  
  useEffect(()=>{
    getContent();
  },[]);

  return (
    <div>
      <div>
        <ul>
          <li><p>Home</p></li>
          <li className='breakline'>
            <p>Pages</p>
            {pages.map(contentunit => (
              <button
              onClick={e => fetchData(contentunit.id)}
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