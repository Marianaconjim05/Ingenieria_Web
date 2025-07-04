import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login.jsx';
import Registro from './pages/Registro.jsx';
import Client from './pages/Client';
import ProductView from './pages/ProductView';
import CartView from './pages/CartView';
import FavView from './pages/FavView';
import CheckoutView from './pages/CheckoutView';
import ReviewView from './pages/ReviewView';
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
          <Route path="/cliente/favoritos" element={<FavView />} />
          <Route path="/cliente/carrito" element={<CartView />} />
          <Route path="/producto/:id" element={<ProductView />} />
          <Route path="/carrito" element={<CartView />} />
          <Route path="/favoritos" element={<FavView />} />
          <Route path="/checkout" element={<CheckoutView />} />
          <Route path="review" element={<ReviewView />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;




// Dentro de <Routes>
<Route path="/checkout" element={<CheckoutView />} />







