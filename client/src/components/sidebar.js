import React, { Fragment }  from 'react'

function sidebar({ notes, onAddNote }) {

  return (
    <div>
        <div>
        <h1>
            Sidebar
        </h1>
        </div>
        <div>
            <h2>Home</h2>
        </div>
        <div>
            <h2>Notes</h2>
            {notes.map((note)=>(
                <div>
                 <h3>{note.page_title}</h3>
                 </div>
            ))}
        </div>
        <div>
            <h2>Formatting</h2>
        </div>
        <div>
            <h1>Example</h1>
        </div>
    </div>
  )
}

export default sidebar;