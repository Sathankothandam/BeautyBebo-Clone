import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Login.css'
const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
         <div style={{width:'100%', height:'220px'}}> </div>
         <div className="Login_main">
          <div className='Already_user'>
                  <div className='title_div'><h1>REGISTERED CUSTOMERS</h1></div>
                  <p>If you have an account, sign in with your email address.</p>
                  <div>
                    <input type="mail" placeholder='Enter mail...' />
                  </div>
                  <div>
                    <input type="password"placeholder='Enter password...'/>
                  </div>
                  <button>SIGNIN</button>
          </div>
          <div className='New_user'>
          <div className='New_title_div'><h1>NEW CUSTOMERS</h1></div>
           <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
           <button onClick={()=>{navigate('/signup')}}>CREATE AN ACCOUNT</button>
          </div>
         </div>
        </div>
  )
}

export default Login