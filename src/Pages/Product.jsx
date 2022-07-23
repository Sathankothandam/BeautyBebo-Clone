
import React, { useState } from 'react'
import { useEffect } from 'react';
import '../Styles/Product.css';
import { Link } from 'react-router-dom';

const Product = ({handleAddproduct,search}) => {
  const [data,setData] = useState([]);
  const [page,setPage] = useState(1);
  const [loading,setLoading] = useState(false);

   console.log(search)
    const fetching = async (p=1)=>{
      try{
        setLoading(true)
      let data = await fetch(`http://localhost:8080/products?q=${search}&_page=${p}&_limit=10`);
       data = await data.json();
      //  console.log(data)
       setData(data)
       setLoading(false)
      }
      catch(err){
        console.log(err)
        setLoading(false)
      }
    }
    useEffect(()=>{
      fetching(page,search)
    },[page,search])

    function handlePrev(){
      setPage(page-1)
    }
    function handleNext(){
     setPage(page+1)
   }
 
  return (
    <div> 
      <div style={{width:'100%', height:'220px'}}> </div>
      <div>
        {loading && <h3 style={{fontSize:"2rem"}}>Loading...</h3>}
       </div>
          <div className='Product_main_div'>
            <div className='Product_left_div'>

            </div>
            <div className='Product_right_div'>
              <div className='Sorting_div'>
                <div className='sort_div'>
                  <h1>sort </h1>
                </div>
                <div className='pagination_div'>
                <button onClick={handlePrev} disabled={page===1}>prev</button> {page}
                <button  onClick={handleNext} disabled={page===3} style={{marginLeft:"5px"}}>Next</button>
                </div>
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