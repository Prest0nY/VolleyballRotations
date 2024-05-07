import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from "./Navbar.js"
import BasePositions from './BasePositions.js';
import Rotation1 from './Rotation1.js'
import Rotation2 from './Rotation2.js'
import Rotation3 from './Rotation3.js'
import Rotation4 from './Rotation4.js'
import Rotation5 from './Rotation5.js'
import Rotation6 from './Rotation6.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <BasePositions />
    <Rotation1 />
    <Rotation2 />
    <Rotation3 />
    <Rotation4 />
    <Rotation5 />
    <Rotation6 />
    <p className="text-center py-16">Note: I created this website to help me and any others remember these rotations as I know they are confusing and take some time and practice to learn.</p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
