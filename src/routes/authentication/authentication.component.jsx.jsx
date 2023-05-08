

import { SignUpForm } from "../../Components/sign-up-form/sign-up-form.component";
import { SignInForm } from "../../Components/sign-in-form/sign-in-form.component";


 
// createUserDocFromAuth
export const Authentication=()=>{
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