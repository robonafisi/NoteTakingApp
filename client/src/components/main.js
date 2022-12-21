import { React, useState } from 'react'
import './main.css';

function Main({ notetaken }) {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    const onSubmitForm = async e =>{
        e.preventDefault();
        try {
          const formtitle = {title};
          const formbody = {description};
        
          const response = await fetch("http://localhost:5000/newpage",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"page_title": formtitle,
            "content": formbody,
            "font_size": 12,
            "is_bold": "TRUE",
            "is_italicised": "FALSE",
            "is_colored": "FALSE"})
          })
          window.location= "/";
        } catch (error) {
          console.error(error.message);
        }
      };

  return (
    <div>
        <div>
        <h1>
            Main
        </h1>
        </div>
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" placeholder='Page Title' value={title} onChange={e => setTitle(e.target.value)}/>
                <input type="text" placeholder='Page Description' value={description} onChange={e => setDescription(e.target.value)}/>
                <button className='btn btn-success'>Save Page</button>
            </form>
        </div>
        <div>
        <div>
            <h1>{notetaken.page_title}</h1>
            <p>{notetaken.content}</p>
        </div>
        </div>
    </div>
  )
}

export default Main;