import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login.jsx';
import Registro from './pages/Registro.jsx';
import Client from './pages/Client';
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/cliente" element={<Client />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;






