import { React, useState, useEffect} from 'react'
import './main.css';

function Main({ activeNote, setactiveNote, showResults, setShowResults }) {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [editTitle, seteditTitle] = useState([]);
    const [editDescription, seteditDescription] = useState([]);
    const [theme, setTheme] = useState('light');


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

      const changeshowResults = async() => {
        seteditTitle(activeNote.page_title);
        seteditDescription(activeNote.content);
        setShowResults(!showResults);
      };

      const pageUpdate = async(e) => {
        e.preventDefault();
        setactiveNote({"page_title":editTitle,"content":editDescription,"id":activeNote.id})
        setShowResults(!showResults);
        try {
          const id = activeNote.id;
          const edittitle = editTitle;
          const editbody = editDescription;
          await fetch(`http://localhost:5000/updatepage/${id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"page_title": edittitle,
            "content": editbody})
          });
        } catch (error) {
          console.error(error.message);
        }
      };

      useEffect(()=>{
        fetch('http://localhost:5000/pages/firstpage')
          .then(response => response.json())
          .then(jsonData => setactiveNote(jsonData[0]))
          .catch(error => console.error(error.message))
      },[]);

      const changeTheme = async() => {
        if (theme == "dark")
        {
          setTheme("light");
        }
        else {
          setTheme("dark");
        }
      };


  return (
    <div className='theme-body-colors' data-theme={theme}>
        <div>
          <button onClick={changeTheme}>
            Change Theme
          </button>
        </div>
        <div className='mt-2'>
        <h1 className='first_header'>
            Welcome to My Note
        </h1>
        </div>
        <div className='mt-4'>
          <h3 className='second_header'>
            Create a new page Here:
          </h3>
        </div>
        <div className='mt-4'>
            <form className="form-style" onSubmit={onSubmitForm}>
                <div className='container row justify-content-md-center'>
                <input className="col-lg-10 first-input" type="text" placeholder='Page Title' onChange={e => setTitle(e.target.value)} required/>
                </div>
                <div className='container row justify-content-md-center mt-2'>
                <textarea className="col-lg-10 second-input" placeholder='Page Content' rows="4" cols="50" onChange={e => setDescription(e.target.value)} required></textarea>
                </div>
                <button className='btn btn-success mt-3 submit-button'>Save Page</button>
            </form>
        </div>

        <br></br>
    <div>
      <div className='line'>
        <div className='space'>
          </div>
        {showResults ?
        <div>
        <div>
          <h1>{activeNote.page_title}</h1>
        </div>
        <div>
          <p>{activeNote.content}</p>
        </div>
        </div>:
        <div>
        <form onSubmit={pageUpdate}>
                <div>
                <input className="title-input" type="text" defaultValue={editTitle} onChange={e => seteditTitle(e.target.value)}/>
                </div>
                <div>
                <textarea rows="4" cols="50" className="content-input mt-2" defaultValue={editDescription} onChange={e => seteditDescription(e.target.value)}></textarea>
                </div>
                <button className='submit-button'>Save Edit</button>
        </form>
        </div>}

      </div>
      <div>
          {showResults && <button className='edit-button' onClick={()=> changeshowResults(activeNote.id)}>EDIT</button>}
      </div>
    </div>
    
    </div>
  )
}

export default Main;
