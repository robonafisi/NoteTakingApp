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
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
          "page_title": formtitle,
          "content": formbody,
          "font_size": 12,
          "is_bold": "TRUE",
          "is_italicised": "FALSE",
          "is_colored": "FALSE"
            });
          const response = fetch("http://localhost:5000/newpage",{
            method: "POST",
            headers: myHeaders,
            body: raw
          })
          console.log(response);
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
            <form>
                <input type="text" name="title" placeholder="Note Title" onChange={e => onSubmitForm(e.target.value)}/>
                <input type="text" name="description" placeholder="Note Description" onChange={e => onSubmitForm(e.target.value)}/>
                <button type='submit'>Save Note</button>
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