import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Product/>}/>
        </Routes>
    </div>
  )
}

export default Routers