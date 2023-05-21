import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { VotePage } from './pages/VotePage'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <VotePage />
  </React.StrictMode>,
);


