import React from 'react'
import './main.css';

function main({ activeNote }) {

  return (
    <div>
        <div>
        <h1>
            Main
        </h1>
        </div>
        <div>
            <input type="text"/>
            <input type="text"/>
        </div>
        <div>
        <div>
            <h1>{activeNote}</h1>
        </div>
        </div>
    </div>
  )
}

export default main;