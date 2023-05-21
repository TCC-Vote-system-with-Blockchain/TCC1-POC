import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AddCandidatePage } from './pages/AddCandidatePage'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AddCandidatePage />
  </React.StrictMode>,
);


