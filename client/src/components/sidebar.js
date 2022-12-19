import React, { Fragment }  from 'react'

function sidebar({ notes }) {

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
        </div>
        <div>
            <h2>Formatting</h2>
        </div>
        <div>
            {notes.map((note)=>(
                <div>
                 <h1>{note.page_title}</h1>
                 <Fragment>{note.content}</Fragment>
                 </div>
            ))}
        </div>
    </div>
  )
}

export default sidebar;