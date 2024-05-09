import React from 'react'
import "../../Stylesheet/login.scss"
import google from "../../assets/images/google.png"
import { Link } from 'react-router-dom'
import logo from "../../assets/images/dark-logo.png"
import log from "../../assets/images/logo.png"
import review from "../../assets/images/review.png"

const Register = () => {
    return (
        <div className="login register">
            <div className="login_img">
                <img src={logo} alt="" />

                <div>
                    <h2 className="h2">
                        Enjoy Seamless <br /> Payment Solutions!
                    </h2>
                    <p className='para'>
                        Discover the ease and convenience of our seamless payment <br /> solutions designed to simplify your financial transactions.
                    </p>

                    <img src={review} alt="" />
                </div>

            </div>
            <div className="login_text">
                <div className="login_form">
                    <img className='login_logo' src={log} alt="" />

                    <div className="login_head">

                        <h2 className="h2 text-black">
                            Sign Up
                        </h2>
                        <p>Fill in the form below to register on Cyberpay</p>
                    </div>
                    <form action="">
                    <div className="input">
                            <label htmlFor="name">Full Name</label>
                            <div>
                                <input type="text" placeholder="Enter Full name" />
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email address</label>
                            <div>
                                <input type="email" placeholder="email@domain.com" />
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
                        <div className="input">
                            <label htmlFor="password">Confirm Password</label>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Confirm Password"

                                />
                            </div>
                        </div>
                        <button className='sign'>Sign Up</button>
                        <button className='google'><img src={google} alt="" /> Continue with Google</button>

                        <p>Already have an account? <Link to="/login" className='text-blue-500'>Sign In</Link></p>
                    </form>

                </div>

            </div>

        </div>
    )
}



export default Register