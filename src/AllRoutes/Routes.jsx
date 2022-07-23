import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddCart from '../Pages/AddCart'
import Address from '../Pages/Address'
import Checkout from '../Pages/Checkout'
import Details from '../Pages/Details'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Product from '../Pages/Product'
import Register from '../Pages/Register'
const Routers = ({cartitems,handleAddproduct,handleRemoveproduct,data,search}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Product data={data} handleAddproduct={handleAddproduct} search={search}/>}/>
            <Route path='/products/:cart_id' element={<Details />}/>
            <Route path='/cart' element={<AddCart cartitems={cartitems} handleAddproduct={handleAddproduct}
            handleRemoveproduct={handleRemoveproduct}
            />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/signup' element={<Register/>}/>
            <Route path='/new_address' element={<Address/>}/>
        </Routes>
    </div>
  )
}

export default Routers