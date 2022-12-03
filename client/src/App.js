import React from 'react'
import './App.css';

export default function App(props) {
  return (
    <div className='container text-center'>
      <div>
        <div>
      <h1>
        {props.title}
      </h1>
      <div>
      <p>
        {props.body}
      </p>
      </div>
      </div>
      </div>
    </div>
  )
}

