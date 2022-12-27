import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar.js';
import Main from './components/main';

function App() {
  const [notes, setNotes] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [activeNote, setactiveNote] = useState([notes[0]]);

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
      <Sidebar notes={notes} setactiveNote={setactiveNote} showresults={showResults} setShowResults={setShowResults}/>
      </div>
      <div className='container'>
      <Main activeNote={activeNote} setactiveNote={setactiveNote} showResults={showResults} setShowResults={setShowResults} />
      </div>
    </div>
  );
}

export default App;
