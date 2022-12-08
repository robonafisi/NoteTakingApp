import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import Sidebar from './components/sidebar';
import Writtingarea from './components/writtingarea';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
    <Writtingarea />
    <App title = "Title One" body="The text body of all of this"/>
  </React.StrictMode>
);


reportWebVitals();
