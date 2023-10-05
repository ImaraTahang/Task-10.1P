import React from 'react';
import './App.css';
import HomePage from './routes/HomePage';
import LoginPage from './routes/LoginPage';
import CreatePage from './routes/CreatePage';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Nav-bar';

function App() {
  return (
        <Routes>
          <Route path='/' element={
          <Navbar 
          text ="DevLink Marketplace"
          text4 ="Find DEV"
          text3 ="Find Jobs"
          text2 ="Login"
          text1 ="Create Account"/>}></Route>
          <Route index element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/create' element={<CreatePage/>}></Route>
        </Routes>

  );
}

export default App;
