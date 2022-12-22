import React  from 'react'
import './sidebar.css';

function sidebar({ notes, activeNote, setactiveNote }) {

  const deletePage = async id => {
    try {
      const deletePage = await fetch(`http://localhost:5000/deletepages/${id}`,{
        method : "DELETE"
      });
      console.log(deletePage);
    } catch (error) {
      console.error(error.message);
    }
  }

  const editPage = async content => {
    console.log(content)
  }

  return (
    <div className='main_div'>
        <div>
            <h3>Notes</h3>
            {notes.map((note)=>(
                <div>
                 <button className="mt-2" key={note.id} onClick={()=>setactiveNote(note)}>{note.page_title}</button>
                 <button onClick={()=> editPage(note)} className='btn btn-warning btn-sm edit-button'>Edit</button>
                 <button onClick={()=> deletePage(note.id)} className='btn btn-danger btn-sm delete-button'>X</button>
                 </div>
            ))}
        </div>
    </div>
  )
}

export default sidebar;