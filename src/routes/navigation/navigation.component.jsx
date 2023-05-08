import { Link, Outlet } from "react-router-dom"

import React, { useContext } from "react";
import "./navigation.style.scss";
import { UserContext } from "../../contexts/user.context";

// import Logo  from "../../assets/logo/Logo.png"
export const Navigation=()=>{

  const {currentUser}=useContext(UserContext);


    return    <>
    
    <nav className="navbar">
    <h2>logo</h2>

        <ul className="navbar__menu">
    <li>
        
        <Link to ="/">
        Home
        </Link>
        </li>
    <li>
        
      <Link to="services">Services</Link>
        
        </li>
    <li>
        {currentUser? "log-out" :<Link to="auth">sign in</Link>
        
      
      }
        
        </li>
   
        </ul>
    </nav>
    
    <Outlet/>
    
    </>
}