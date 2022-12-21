import React from 'react'
import './main.css';

function main({ notetaken }) {

  return (
    <div>
        <div>
        <h1>
            Main
        </h1>
        </div>
        <div>
            <form>
                <input type="text"/>
                <input type="text"/>
                <submit>Save Note</submit>
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

export default main;