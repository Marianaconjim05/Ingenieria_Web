import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home';
import Login from './pages/Login.jsx';
import Registro from './pages/Registro.jsx';
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
    </>
  )
}

export default App;




