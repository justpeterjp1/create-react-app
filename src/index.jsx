import { createRoot } from 'react-dom/client';
import React from 'react';
// import App from './Component-B/App'; this is current project
import App from './Component-C/App'; // Change this to switch between projects
// import App from './Practise-Comps/App'; // Change this to switch between projects
// import App from './App'
const root = createRoot(document.getElementById('root'));
root.render(<App />);