import { Link, Outlet } from "react-router-dom"

import React, { useContext } from "react";
import "./navigation.style.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

// import Logo  from "../../assets/logo/Logo.png"
export const Navigation=()=>{

  const {currentUser,setCurrentUser}=useContext(UserContext);

  const logOut=async()=>{
    const response=await signOutUser();//return  undefined
    console.log(response);
setCurrentUser(null)
  }

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
        {currentUser? <button onClick={logOut}>log-out</button>  :<Link to="auth">sign in</Link>
        
      
      }
        
        </li>
   
        </ul>
    </nav>
    
    <Outlet/>
    
    </>
}