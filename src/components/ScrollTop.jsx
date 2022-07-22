import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../Styles/Scroll.css'
const ScrollTop = () => {
    const [scrollbutton , setScrollbutton] = useState(false)

     useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                setScrollbutton(true)
            }
            else{
                setScrollbutton(false)
            }
        })
     })

     const scrollup = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
     }

  return (
    <div>
        {scrollbutton && <button className='Scrollbutton'
             onClick={scrollup}><i class="fa-solid fa-angles-up"></i></button>}
    </div>
  )
}

export default ScrollTop