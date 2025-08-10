import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/header/Header.jsx';
import { Route, Routes } from 'react-router-dom';

import NoMatch from './pages/noMatch/NoMatch.jsx';
import PostUser from './pages/employee/PostUser.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/employee' element={<PostUser/>} />
      <Route path='*' element={<NoMatch/>} />
    </Routes>
    </>
  );
}

export default App;
