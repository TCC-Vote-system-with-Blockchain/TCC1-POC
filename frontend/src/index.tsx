import React from 'react';
import { AddCandidatePage } from './pages/AddCandidatePage'
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AddCandidatePage />
  </React.StrictMode>,
);


