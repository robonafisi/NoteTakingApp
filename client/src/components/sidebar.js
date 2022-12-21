import React, { Fragment }  from 'react'
import './sidebar.css';

function sidebar({ notes, activeNote, setactiveNote }) {

  return (
    <div className='main_div'>
        <div>
        <h3>
            Sidebar
        </h3>
        </div>
        <div>
            <h3>Notes</h3>
            {notes.map((note)=>(
                <div>
                 <button id={note.id} onClick={()=>setactiveNote(note.id)}>{note.page_title}</button>
                 </div>
            ))}
        </div>
        <div>
            <h3>Formatting</h3>
            <button>Bold</button>
            <button>Italic</button>
            <button>Bigger</button>
            <button>Smaller</button>
            <button>Highlight</button>
        </div>
    </div>
  )
}

export default sidebar;