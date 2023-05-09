




 
// createUserDocFromAuth
import {  useState } from 'react'
import './sign-in-form.style.scss'
// import { createUserAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { FormInput } from '../mini-components/form-input/form-input.component'
// import { Button, buttonTypes } from '../Button/Button.component'

import { createUserDocFromAuth, signInUserWithEmailAndPassword, signInWithGooglePopup } from '../../../utils/firebase/firebase.utils'
import { Button, buttonTypes } from '../../mini-components/Button/Button.component'
import { FormTitle } from '../mini-components/form-title/form-title.component'






const defaultFormFields={
    email:"",
    password:"",
}
export const SignInForm=()=>{

    const logGoogleUser = async ()=>{

         await signInWithGooglePopup();
        
       
    }
const [formFields,setFromFields]=useState(defaultFormFields);
  


const handleChange=(e)=>{
    const {name,value}=e.target;

    setFromFields({...formFields,[name]:value});
}


const handleSubmit=async (e)=>{
    e.preventDefault();
    const {email,password}=formFields;



    try{

      const {user}= await signInUserWithEmailAndPassword(email,password);
        setFromFields(defaultFormFields);
    }catch(err){
        let errorMessage=null;

        switch (err.code) {
            case "auth/invalid-email":
              errorMessage= ("The email address you entered is not valid.");
              break;
            case "auth/user-disabled":
              errorMessage= ("Your account has been disabled by an administrator.");
              break;
            case "auth/user-not-found":
              errorMessage= ("The email address you entered is not associated with any account.");
              break;
            case "auth/wrong-password":
              errorMessage= ("The password you entered is incorrect.");
              break;
            case "auth/network-request-failed":
              errorMessage= ("There was a problem with the network connection.");
              break;
            case "auth/too-many-requests":
              errorMessage= ("Too many requests have been made from this device. Try again later.");
              break;
            case "auth/internal-error":
              errorMessage= ("An internal error has occurred. Please try again later.");
              break;
            default:
              errorMessage= ("An unknown error occurred. Please try again later.");
              break;
          }
          if(errorMessage) alert(errorMessage)
        }

    }


    return <div>

<FormTitle>

    Sign in with your email and password
</FormTitle>


    <form  onSubmit={handleSubmit}>

<FormInput  label="Email" type="email" required  name="email" value={formFields.email} onChange={handleChange}/>
<FormInput label="Password" type="password" required  name='password' value={formFields.password} onChange={handleChange} />




<Button onClick={handleSubmit}>Sign In</Button>
    <Button  className={buttonTypes.google} onClick={logGoogleUser} type='button'>Sign in with google popup</Button>
    </form>
  
    
    
    
    </div>
}