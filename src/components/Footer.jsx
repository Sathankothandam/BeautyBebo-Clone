import React from 'react'
import '../Styles/Footer.css'
const Footer = () => {
  return (
    <div className='Footer_main'>
        <div>
            <ul>
            <h3> CONTACT INFO</h3>
                <li>(+91) 7877061041</li>
                <li>support@beautybebo.com <br />
              sales@beautybebo.com</li>
                <li>Open time: 10:00AM - 7:00PM</li>  
            </ul>
        </div>
        <div>
        <ul>
        <h3>QUICK LINKS</h3>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms & Conditions</li>
                <li>Shipping Policy</li>
               
            </ul>
        </div>
        <div>
        <ul>
        <h3>CUSTOMER INFO</h3>
                <li>My Account</li>
                <li>Track Your Order</li>
                <li>Order Return</li>
                <li>Wish List</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div>
        <ul>
        <h3>CATEGORIES</h3>
                <li>Make Up</li>
                <li>Skin</li>
                <li>Hair</li>
                <li>Persional Care</li>
                <li>Fragrance</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer