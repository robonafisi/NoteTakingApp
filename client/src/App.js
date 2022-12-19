import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar.js';
import Main from './components/main';

function App() {
  const [notes, setNotes] = useState([]);


  return (
    <div className="App">
      <Sidebar notes={notes} />
      <Main />
    </div>
  );
}

export default App;
