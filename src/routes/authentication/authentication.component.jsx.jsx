

 
import { SignInForm } from "../../Components/Forms/sign-in-form/sign-in-form.component";
import { SignUpForm } from "../../Components/Forms/sign-up-form/sign-up-form.component";


 
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