import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddCart from '../Pages/AddCart'
import Checkout from '../Pages/Checkout'
import Details from '../Pages/Details'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Product from '../Pages/Product'
const Routers = ({cartitems,handleAddproduct,handleRemoveproduct}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Product handleAddproduct={handleAddproduct}/>}/>
            <Route path='/products/:cart_id' element={<Details />}/>
            <Route path='/cart' element={<AddCart cartitems={cartitems} handleAddproduct={handleAddproduct}
            handleRemoveproduct={handleRemoveproduct}
            />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
    </div>
  )
}

export default Routers