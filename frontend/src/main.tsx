import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import './index.css';


const root = document.getElementById('root');

if (root) {
  const rootElement = createRoot(root);

  rootElement.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
} else {
  console.error("Element with id 'root' not found");
}
