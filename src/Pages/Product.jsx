
import React, { useState } from 'react'
import { useEffect } from 'react';
import '../Styles/Product.css';
import { Link } from 'react-router-dom';

const Product = ({handleAddproduct}) => {
  const [data,setData] = useState([]);

    const fetching = async ()=>{
      let data = await fetch(`http://localhost:8080/products`);
       data = await data.json();
      //  console.log(data)
       setData(data)
    }
    useEffect(()=>{
      fetching()
    },[])
  return (
    <div> 
      <div style={{width:'100%', height:'220px'}}> </div>
          <div className='Product_main_div'>
            <div className='Product_left_div'>

            </div>
            <div className='Product_right_div'>
              <div className='Sorting_div'>
                <h1>sort </h1>
                
              </div>
              <div className='Product_append_div'>
             {data.map((items)=>{
              return(
              <div key={items.id} className='product_div'>
                 <Link to={`/products/${items.id}`}>
                <div style={{height:'90%'}}>
                <div style={{marginLeft:"10%",marginBottom:"10px"}}><img src={items.img} alt="" /></div>
                <p>{items.title}</p>
                <div className='Price_div'>
                <p>₹{items.offprice}</p>
                <h4>₹{items.price}</h4>
                <h5>{items.offer} off</h5>
                </div>
                </div>
               </Link>
              <button onClick={()=>handleAddproduct(items)}>Add to Cart</button>
              
            </div>
          )
        })}
      </div>
            </div>
          </div>
      
      </div>
  )
}

export default Product