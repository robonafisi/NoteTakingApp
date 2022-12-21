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

  const getInfo = async() =>{
    try {
      const response = await fetch("http://localhost:5000/pages/11");
      const jsonData = await response.json();
      setactiveNote(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  } ;

  const getActiveNote = () => {
    try {
      const response = await fetch(`http://localhost:5000/pages/${note.id}`);
      const jsonData = await response.json();
      setactiveNote(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(()=>{
    getContent();
    getInfo();
  });

  return (
    <div className="App">
      <Sidebar notes={notes} activeNote={activeNote} setactiveNote={setactiveNote}/>
      <Main activeNote={getActiveNote()}/>
    </div>
  );
}

export default App;
