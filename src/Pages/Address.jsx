import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Address.css'
const Address = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div style={{width:'100%', height:'220px'}}> </div>
       <div className='Address_main_div'>
             <div className='Address_title'>
              <h1 style={{fontWeight:"bold"}}>ADD ADDRESS</h1>
             </div>
             <div className='Address_inputs'>
              <input type="text"  placeholder='Name'/><br />
              <input type="text" placeholder='Address'/><br />
              <input type="text" placeholder='City'/><br />
              <input type="number" placeholder='Pincode' /><br />
              <input type="text" placeholder='State'/><br />
              <button onClick={()=>{navigate('/checkout')}}>Add Address</button>
             </div>
       </div>
    </div>
  )
}

export default Address