import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'
import Account from './Account'
import Darkmode from './Darkmode'
const Header = () => {
  return (
    <div className='Header_Main'>
      <div className='top_add'>
        <img src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" alt="banner" />
      </div>
      <div className='Center_part'>
        <div className='navbar_logo'>
            <Link to='/'><img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt="Brand_logo" /></Link>
        </div>
        <div className='search_bar'>
             <input type="text" placeholder='Enter your search...'/>
             <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className='login_logo'>
               <div className='acc_icon'>
                {/* <i class="fa-solid fa-user"></i> */}
                <Account/>
                </div>
               <div>
                <Darkmode/>
               </div>
        </div>
      </div>
      <div className='Roure_part'>
        <div>
        <Link to='/products'><h4>MAKEUP</h4></Link></div>
        <div>
        <Link to='/products'><h4>SKIN</h4></Link></div>
        <div>
        <Link to='/products'><h4>HAIR</h4></Link></div>
        <div>
        <Link to='/products'><h4>PERSIONAL CARE</h4></Link></div>
        <div>
        <Link to='/products'><h4>FRAGRANCE</h4></Link></div>
        <div><i class="fa-solid fa-cart-shopping"></i></div>
      </div>
    </div>
  )
}

export default Header