import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddCandidatePage } from './pages/AddCandidatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'/>
        <Route path='/add-candidate' Component={AddCandidatePage}/>
      </Routes>
    </BrowserRouter>
  )
}