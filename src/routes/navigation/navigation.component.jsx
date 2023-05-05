import { Link, Outlet } from "react-router-dom"

import React from "react";
import "./navigation.style.scss";

// import Logo  from "../../assets/logo/Logo.png"
export const Navigation=()=>{



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

        </ul>
    </nav>
    
    <Outlet/>
    
    </>
}