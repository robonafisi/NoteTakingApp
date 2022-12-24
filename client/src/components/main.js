import { React, useState } from 'react'
import './main.css';

function Main({ notetaken, secondnote, thirdnote }) {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [showResults, setShowResults] = useState(false);
  

    const onSubmitForm = async e =>{
        e.preventDefault();
        try {
          const formtitle = title;
          const formbody = description;
          
          await fetch("http://localhost:5000/newpage",{
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
            Welcome to My Note
        </h1>
        </div>
        <div>
            <form onSubmit={onSubmitForm}>
                <div className='container row justify-content-md-center'>
                <input className="col-lg-10" type="text" placeholder='Page Title' onChange={e => setTitle(e.target.value)} required/>
                </div>
                <div className='container row justify-content-md-center mt-2'>
                <textarea className="col-lg-10" placeholder='Page Content' onChange={e => setDescription(e.target.value)} rows="4" cols="50" required></textarea>
                </div>
                <button className='btn btn-success mt-3 submit-button'>Save Page</button>
            </form>
        </div>

        <br></br>
        <div>
        <div className='line'>
          <div className='space'>
            <h1>{notetaken.page_title}</h1>
          </div>
            <p>{notetaken.content}</p>
        </div>
        <div>
          <button >
            Edit
          </button>
        </div>
        </div>
    </div>
  )
}

export default Main;