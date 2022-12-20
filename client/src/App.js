import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar.js';
import Main from './components/main';

function App() {
  const [notes, setNotes] = useState([]);

  const getPages = async() =>{
    try {
      const response = await fetch("http://localhost:5000/pages");
      const jsonData = await response.json();
      setNotes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };



  const getContent = async() =>{
    try {
      const response = await fetch("http://localhost:5000/pages");
      const jsonData = await response.json();
      setNotes(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  } ;

  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={getContent}/>
      <Main />
    </div>
  );
}

export default App;
