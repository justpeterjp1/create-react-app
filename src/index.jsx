import { createRoot } from 'react-dom/client';
// import App from './Component-B/App'; this is current project
import App from './Component-B/App'; // Change this to switch between projects
// import App from './Practise-Comps/App'; // Change this to switch between projects

const root = createRoot(document.getElementById('root'));
root.render(<App />);