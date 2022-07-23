import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Checkout.css'
const Checkout = () => {
  const navigate = useNavigate()
  return (
    <div>
         <div style={{width:'100%', height:'220px'}}> </div>
         <div className='Checkout_main'>
          <h1 style={{fontWeight:"bold", marginBottom:"20px"}}>CARD DETAILS</h1>
          <div className='top_address'>
          <div className='Previous_Address'>
         <p>Previous address</p> <input type='checkbox'/> 
         </div>
         <div className='New_address'>
          <button onClick={()=>{navigate('/new_address')}}>
            ADD NEW ADDRESS
          </button>
         </div>
          </div>
          <div className='card_details'>
            <input type="number" placeholder='Enter 16 digit card number ' /><br />
            <input type="number" placeholder='Enter Date'/><br />
            <input type="number" placeholder='Enter CVV'/><br />
            <button onClick={()=>{
              alert("Order Sucessfully");
              navigate('/')
            }}>Proceed To Pay</button>
          </div>
         </div>

       
        </div>
  )
}

export default Checkout