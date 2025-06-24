import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const LoginSignup = () => {

  const [action,setAction] = useState("Login");

  return (
     <div className="container">
      <div className="LogHead"> {action} </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={user_icon} alt="User Icon" className="inputs" />
          <input type="text" placeholder="Name" />
        </div>}
        
        <div className="input">
          <img src={email_icon} alt="Email Icon" className="inputs"/>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" className="inputs"/>
          <input type="password" placeholder="Password" />
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
          <div className= {action==="Login"?"submit gray":"submit"}on onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className= {action==="Sign Up"?"submit gray":"submit"}on onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>
    </div>
  );
};





