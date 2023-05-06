

import { SignUpForm } from "../../Components/sign-up-form/sign-up-form.component";
import { SignInForm } from "../../Components/sign-in-form/sign-in-form.component";


 
// createUserDocFromAuth
export const Authentication=()=>{


  
    // const logGoogleUserRedirect = async ()=>{

    //     await signInWithGoogleRedirect();
    //     // console.log(response);
    // }
    
    // useEffect(() => {
    //     const f =async ()=>{
    //         const response= await getRedirectResult(auth);

    //         if(response)
    //         createUserDocFromAuth(response.user);
    //         // console.log(response);

    //     }
    
    //     f();
    //   return () => {
    //   }
    // }, [])
    

    return <>
    <div style={{display:"flex",gap:"1em"}}>

<div>


    
    <SignUpForm/>
    </div>


<div>
    <SignInForm/>
</div>
</div>
    
    
    </>
}