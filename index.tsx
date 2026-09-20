import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Restore last path if available (useful for iframe refreshes that clear the hash)
const lastPath = sessionStorage.getItem('last_path');
if (lastPath && !window.location.hash) {
  window.location.hash = lastPath;
}



const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);