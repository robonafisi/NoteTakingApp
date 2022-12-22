import { React, useState } from 'react'
import './main.css';

function Main({ notetaken }) {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    const onSubmitForm = async e =>{
        e.preventDefault();
        try {
          const formtitle = title;
          const formbody = description;
          
          const response = await fetch("http://localhost:5000/newpage",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"page_title": formtitle,
            "content": formbody})
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
                <div className='container row justify-content-md-center'>
                <input className="col-lg-10" type="text" placeholder='Page Title' value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className='container row justify-content-md-center mt-2'>
                <textarea className="col-lg-10" type="textarea" placeholder='Page Content' value={description} onChange={e => setDescription(e.target.value)} rows="4" cols="50"> </textarea>
                </div>
                <button className='btn btn-success mt-3'>Save Page</button>
            </form>
        </div>

        <br></br>
        <div>
        <div className='line'>
            <h1>{notetaken.page_title}</h1>
            <p>{notetaken.content}</p>
        </div>
        </div>
    </div>
  )
}

export default Main;