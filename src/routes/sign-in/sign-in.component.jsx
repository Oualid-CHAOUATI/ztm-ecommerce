

import { signInWithGooglePopup }  from "../../utils/firebase/firebase.utils";
export const SignIn=()=>{


    const logGoogleUser = async ()=>{

        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return <>
    <button onClick={logGoogleUser}>Sign in with google popup</button>
    
    
    
    </>
}