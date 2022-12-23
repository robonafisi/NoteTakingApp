import React  from 'react'
import './sidebar.css';

function sidebar({ notes, activeNote, setactiveNote }) {

  const deletePage = async id => {
    try {
      const deletePage = await fetch(`http://localhost:5000/deletepages/${id}`,{
        method : "DELETE"
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className='main_div'>
        <div>
          <div className='line-button mt-3'>
            <h3>Notes</h3>
          </div>
            {notes.map((note)=>(
                <div className='mt-3'>
                 <button className="mt-1" key={note.id} onClick={()=>setactiveNote(note)}>{note.page_title}</button>
                 <button onClick={()=> deletePage(note.id)} className='btn btn-danger btn-sm delete-button'>X</button>
                 </div>
            ))}
        </div>
    </div>
  )
}

export default sidebar;