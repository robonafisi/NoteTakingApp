import { React, useState }  from 'react'
import './sidebar.css';


function Sidebar({ notes, setactiveNote, showResults, setShowResults }) {

  const [isActive, setIsActive] = useState(false);

  const deletePage = async id => {
    try {
      await fetch(`http://localhost:5000/deletepages/${id}`,{
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
                 <button className={isActive ? 'button-sidebar selected' : 'button-sidebar'} key={note.id} onClick={()=>{setactiveNote(note); setShowResults(true); setIsActive(current => !current);}}>{note.page_title}</button>
                 <button className='delete-button-sidebar' onClick={()=> deletePage(note.id)}>X</button>
                 </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar;