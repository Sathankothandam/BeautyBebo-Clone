import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../Styles/Detail.css'
// import ReactImageMagnify from 'react-image-magnify';


const Details = () => {
    const [data,setData] = useState({});
    const param = useParams();
    const navigate = useNavigate()
    
   
        
      
      useEffect(()=>{
        fetch(`http://localhost:8080/products/${param.cart_id}`)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            setData(res)
        })
      })

  return (
    <div>
        <div style={{width:'100%', height:'220px'}}> </div>
        <div className='Detail_main'>
          <div className='Detail_left'>
          <img src={data.img} alt="" />
          <h1>{data.title}</h1>
          <p>₹{data.price}</p>
          </div>
          
          <div className='Detail_right'>
            <p>Rejuvenate your body and mind; keep skin healthy with WOW Skin Science Thai Body Massage Oil.
               This nutrient and vitamin enriched oil will soothe your body and relieve stress.
                Delivers the goodness of 6 skin-smoothing oil blend infused with lemongrass, 
                kaffir lime essential oils and jasmine absolute.
                 It helps to restore youthful suppleness to your skin by protecting it from damage caused by free radicals.
               Massaging with this oil strengthens the skin structure and helps to repair skin damage. </p>
               <button onClick={()=>{navigate('/products')}}><i class="fa-solid fa-arrow-left"></i></button>
          </div>
        </div>
      
       
    </div>
  )
}

export default Details