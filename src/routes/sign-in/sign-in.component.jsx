

import { useEffect } from "react";
import {auth, createUserDocFromAuth, signInWithGooglePopup ,signInWithGoogleRedirect}  from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";


 
// createUserDocFromAuth
export const SignIn=()=>{


    const logGoogleUser = async ()=>{

        const {user} = await signInWithGooglePopup();
        // console.log(response);
        createUserDocFromAuth(user);
    }
    const logGoogleUserRedirect = async ()=>{

        await signInWithGoogleRedirect();
        // console.log(response);
    }
    
    useEffect(() => {
        const f =async ()=>{
            const response= await getRedirectResult(auth);

            if(response)
            createUserDocFromAuth(response.user);
            // console.log(response);

        }
    
        f();
      return () => {
      }
    }, [])
    

    return <>
    <button onClick={logGoogleUser}>Sign in with google popup</button>
    <button onClick={logGoogleUserRedirect}>Sign in with google redirect</button>
    
    
    
    </>
}