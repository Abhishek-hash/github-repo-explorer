// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import 'createRoot' from 'react-dom/client'
import App from './App';
import './index.css';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
