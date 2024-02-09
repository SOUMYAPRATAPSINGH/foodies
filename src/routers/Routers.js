import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from '../pages/About'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Menu from '../pages/Menu'
import Profile from '../pages/Profile'
import Register from '../pages/Register'


const Routers = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`home`} element={<Home />} />
      <Route path={`/about`} element={<About />} />
      <Route path={`/contact`} element={<Contact />} />
      <Route path={`/menu`} element={<Menu />} />
      <Route path={`/cart`} element={<Cart />} />
      <Route path={`/login`} element={<Login />} />
      <Route path={`/register`} element={<Register />} />
      <Route path={`/checkout`} element={<Checkout />} />
      <Route path={`/profile`} element={<Profile />} />
    </Routes>
  )
}

export default Routers