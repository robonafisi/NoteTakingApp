import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import Sidebar from './components/sidebar';
import Tabbar from './components/tabbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
    <Tabbar />
    <App />
  </React.StrictMode>
);


reportWebVitals();
