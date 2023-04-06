import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/user'
import Homepage from './pages/homepage'
import ProductDetail from './pages/detail'
import Login from './pages/login'
import Lognup from './pages/signup'


// 1. Khai bao router

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Lognup />}></Route>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Homepage />} />
        <Route path='product/:id' element={<ProductDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App