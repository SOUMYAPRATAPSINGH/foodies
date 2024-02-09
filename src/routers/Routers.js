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


const Routers = ({ URL = "" }) => {
  return (
    <Routes>
      <Route path={`/`} element={<Home URL={URL} />} />
      <Route path={`home`} element={<Home URL={URL} />} />
      <Route path={`/about`} element={<About URL={URL} />} />
      <Route path={`/contact`} element={<Contact URL={URL} />} />
      <Route path={`/menu`} element={<Menu URL={URL} />} />
      <Route path={`/cart`} element={<Cart URL={URL} />} />
      <Route path={`/login`} element={<Login URL={URL} />} />
      <Route path={`/register`} element={<Register URL={URL} />} />
      <Route path={`/checkout`} element={<Checkout URL={URL} />} />
      <Route path={`/profile`} element={<Profile URL={URL} />} />
    </Routes>
  )
}

export default Routers