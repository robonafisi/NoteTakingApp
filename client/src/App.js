import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar.js';
import Main from './components/main';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setactiveNote] = useState([]);

  const getContent = async() =>{
    try {
      const response = await fetch("http://localhost:5000/pages");
      const jsonData = await response.json();
      setNotes(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  } ;

  useEffect(()=>{
    getContent();
  });

  return (
    <div className="App">
      <div>
      <Sidebar notes={notes} activeNote={activeNote} setactiveNote={setactiveNote}/>
      </div>
      <div className='container'>
      <Main notetaken={activeNote}/>
      </div>
    </div>
  );
}

export default App;
