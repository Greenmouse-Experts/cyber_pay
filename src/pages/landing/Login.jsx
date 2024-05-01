import React from 'react'
import "../../Stylesheet/login.scss"
import google from "../../assets/images/google.png"
import { Link } from 'react-router-dom'
import logo from "../../assets/images/dark-logo.png"
import log from "../../assets/images/logo.png"

const Login = () => {
  return (
    <div className="login">
      <div className="login_text">
        <div className="login_form">
         <img className='login_logo' src={log} alt="" />

           <div className="login_head">
           
          <h2 className="h2 text-sky-950">
            Sign In
          </h2>
          <p>Fill in the form below to continue to Cyberpay</p>
        </div>
        <form action="">
          <div className="input">
            <label htmlFor="email">Email address</label>
            <div>
              <input type="text" placeholder="email@domain.com" />
            </div>
          </div>

          <div className="input">
              <label htmlFor="password">Password</label>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                 
                />
              </div>
             </div> 
             <button className='sign'>Sign In</button>
             <button className='google'><img src={google} alt="" /> Continue with Google</button>

             <p>I don't have an account? <Link to="/register" className='text-blue-500'>Sign Up</Link></p>
        </form>

        </div>
       
      </div>
      <div className="login_img">
        <img  src={logo} alt="" />

        <div>
          <h2 className="h2">
        CyberPay offers a range of flexible payment options to suit your needs.
        </h2>
        <p className='para'>
        Discover the ease and convenience of our seamless payment solutions designed to simplify your financial transactions.
        </p>
        </div>
        
      </div>
    </div>
  )
}

export default Login