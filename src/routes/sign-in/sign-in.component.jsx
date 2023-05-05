

import { createUserDocFromAuth, signInWithGooglePopup }  from "../../utils/firebase/firebase.utils";


// createUserDocFromAuth
export const SignIn=()=>{


    const logGoogleUser = async ()=>{

        const {user} = await signInWithGooglePopup();
        // console.log(response);
        createUserDocFromAuth(user);
    }

    return <>
    <button onClick={logGoogleUser}>Sign in with google popup</button>
    
    
    
    </>
}