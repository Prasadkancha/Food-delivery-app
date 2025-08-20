import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [curentState, setCurrentState] = useState("Login")

    return (
        <div className='login-popup'>
            <div className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{curentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {curentState === "Login" ? <></> : <input type="text" placeholder='Name' required />}

                    <input type="email" placeholder='Email' required />
                    <input type="password" placeholder='password' required />
                </div>
                <button>{curentState === "Sign up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing,i agree to the terms of use & privacy policy.</p>
                </div>
                {curentState === "Login"
                    ? <p>Create a new Accountspan? <span onClick={() => setCurrentState("Sign up")}>Click here</span></p>
                    : <p>Already have an Account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>}
            </div>

        </div>
    )
}

export default LoginPopup
