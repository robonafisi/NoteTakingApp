import React from 'react'

export default function Forms() {
    
  return (
    <div>
        <div>
        <form onSubmit={()=> pageUpdate(activeNote.id)}>
                <div>
                <input className="title-input" type="text" defaultValue={editTitle} onChange={e => seteditTitle(e.target.value)}/>
                </div>
                <div>
                <textarea rows="4" cols="50" className="content-input mt-2" defaultValue={editDescription} onChange={e => seteditDescription(e.target.value)}></textarea>
                </div>
                <button className='submit-button'>Save Edit</button>
        </form>
        </div>

        <div>
          {showResults && <button className='edit-button' onClick={()=> changeshowResults(activeNote.id)}>EDIT</button>}
        </div>
    </div>
  )
}
