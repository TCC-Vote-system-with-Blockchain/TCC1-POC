import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddCandidatePage } from './pages/AddCandidatePage';
import { VotePage } from './pages/VotePage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/vote-page' Component={VotePage}/>
        <Route path='/add-candidate' Component={AddCandidatePage}/>
      </Routes>
    </BrowserRouter>
  )
}