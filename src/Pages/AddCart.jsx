// import { Link } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/AddCart.css'
function AddCart({cartitems,handleAddproduct,handleRemoveproduct}) {
     
     const navigate = useNavigate()
    const shipping = 42;

    const totalPrice = cartitems.reduce((price,item)=> price+item.quantity * item.price,0)
  return (
    <div>
        <div style={{width:'100%', height:'220px'}}> </div>
        {cartitems.length===0 ? <div style={{display:"flex", justifyContent:"space-around",alignItems:"center", marginTop:"-50px"}}>
            <img src="https://c.tenor.com/Y3c23UQQ3MIAAAAC/empty-box.gif" alt="" />
          <div>
            <h1 style={{fontSize:"25px", fontWeight:"bold"}}>No items added in the cart</h1>
            <button onClick={()=>{navigate('/products')}} style={{backgroundColor:"#dd0285",padding:"7px 12px",marginTop:"10px",color:"white"}}>
                GET ITEMS
                </button>
          </div>
          </div>  :
        <div className='cart_main_div'>
            <div className='products_div'>
            {cartitems.map((items)=>{
        return (
            <div key={items.id} className='product'>
             <div className='image_div'>
             <div className='img'>
             <img src={items.img} alt={items.title} />
             </div>
             <button onClick={()=> handleRemoveproduct(items)} >REMOVE</button>
             <button onClick={()=>{navigate('/products')}}>CONTINUE SHOPPING</button>
             </div>
             <div> <p>{items.title}</p></div>
            
             
             <div className='prices_detail_div'>
             <p>₹{items.price}</p>
             <div className='quantity_div'>
             <button onClick={()=> handleAddproduct(items)} >+</button> 
             <h2>qty</h2> 
             <button onClick={()=> handleRemoveproduct(items)} disabled={items.quantity===1}>-</button>
             </div>
             <h1>{items.quantity}*{items.price}</h1>
             </div>
            </div>
        )
       })}
            </div>
            <div className='calculate_div_main'>
                <div className='calculate_div' >
                    <h1 style={{fontWeight:"bold", color:"grey"}}>SUMMARY</h1>
                <div>
              <h1>Sub Total: ₹{totalPrice}</h1>
             </div>
             <div>
            <h1>Shipping Charge: ₹{shipping}</h1>
             </div>
            <div>
            <h1 style={{fontWeight:"bold"}}>Total: ₹{totalPrice + shipping}</h1>
            </div>
            <button onClick={()=>{navigate('/checkout')}}>PAY & CHECKOUT</button>
                </div>
            </div>
        </div> }
    </div>
  )
}

export default AddCart