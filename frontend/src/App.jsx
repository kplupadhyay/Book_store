import { useState } from 'react';
import {Routes , Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import UpdateBooks from './pages/UpdateBooks';
import ShowBooks from './pages/ShowBooks';
import DeleteBooks from './pages/DeleteBooks';

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books/create" element={<CreateBooks/>}/>
      <Route path="/books/delete/:id" element={<DeleteBooks/>}/>
      <Route path="/books/edit/:id" element={<UpdateBooks/>}/>
      <Route path="/books/details/:id" element={<ShowBooks/>}/>
    </Routes>
  )
}

export default App
