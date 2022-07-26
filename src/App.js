
// import { Slide } from '@chakra-ui/react';
import {  useEffect, useState } from 'react';
import Routers from './AllRoutes/Routes';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollTop from './components/ScrollTop';
// import axios from 'axios';
// import Cart from './Pages/Cart';
 const localstorages = JSON.parse(localStorage.getItem("cart") || "[]")
function App() {
  // ***************************************
      // const [prod,setProd] = useState([])
      const [search,setSearch] = useState("")

      // useEffect(()=>{
      //    axios.get("http://localhost:8080/products")
      //    .then(res=>{
      //     setProd(res.data)
      //     console.log(prod)
      //    })
      //    .catch(err=>{
      //     console.log(err)
      //    })
        //  console.log(prod)
      // },[])

      // const filterProducts = prod.filter(items =>{
      //  return items.title.toLowercase().includes( search.toLowerCase() )
      // })

       const handleChange = (e)=>{
             setSearch(e.target.value)
            //  console.log(search)
       }

  // **************************************
  const [cart,setCart] = useState(localstorages)

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])

  const handleAddproduct = (product) => {
     console.log("hai")
      const productExist = cart.find((items)=> items.id === product.id);
      if(productExist){
        setCart(cart.map((items)=>items.id === product.id ?
        {...productExist,quantity : productExist.quantity + 1}:items))
      }
      else{
        setCart([...cart,{...product,quantity:1}])
      }
  }
    
  const handleRemoveproduct = (product)=>{
    const productExist = cart.find((items)=> items.id === product.id);
    if(productExist.quantity === 1){
      setCart(cart.filter((items)=>items.id !== product.id));
    }
    else{
      setCart(
        cart.map((items)=>items.id === product.id ?
        {...productExist,quantity : productExist.quantity - 1}:items))
    }
  }
  return (
    <div className="App">
      <Header cartitems={cart} handleChange={handleChange}/>
      <ScrollTop/>
      <Routers search={search}  cartitems={cart} handleAddproduct={handleAddproduct} handleRemoveproduct={handleRemoveproduct}/>
      <Footer/>
    </div>
  );
}

export default App;
