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

  const getActiveNote = async() => {
  
  }

  useEffect(()=>{
    getContent();
  });

  return (
    <div className="App">
      <Sidebar notes={notes} activeNote={activeNote} setactiveNote={setactiveNote}/>
      <Main notetaken={activeNote}/>
    </div>
  );
}

export default App;
