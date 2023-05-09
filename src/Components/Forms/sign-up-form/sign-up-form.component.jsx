import { useState } from 'react'
import './sign-up-form.style.scss'
 
import { FormInput } from '../mini-components/form-input/form-input.component'
import { FormTitle } from '../mini-components/form-title/form-title.component'
import { Button, buttonTypes } from '../../mini-components/Button/Button.component'
import { createUserAuthWithEmailAndPassword } from '../../../utils/firebase/firebase.utils'



const defaultFormFields={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:"",
}
export const SignUpForm=()=>{

const [formFields,setFromFields]=useState(defaultFormFields);
  


const handleChange=(e)=>{
    const {name,value}=e.target;

    setFromFields({...formFields,[name]:value});
}


const handleSubmit=async (e)=>{
    e.preventDefault();
    const {email,password,displayName}=formFields;



    try{

        const response = await createUserAuthWithEmailAndPassword(email,password,displayName);
        console.log(response);
        setFromFields(defaultFormFields);
        
    }catch(err){
        const errorCode= err.code;
        let  errorMessage=null;
        switch (errorCode) {
            case "auth/email-already-in-use":
              errorMessage= "The email address you entered is already associated with another account.";break;
            case "auth/invalid-email":
              errorMessage= "The email address you entered is not valid.";break;
            case "auth/operation-not-allowed":
              errorMessage= "The email/password authentication provider is not enabled.";break;
            case "auth/weak-password":
              errorMessage= "The password you entered is too weak.";break;
            case "auth/network-request-failed":
              errorMessage= "There was a problem with the network connection.";break;
            case "auth/too-many-requests":
              errorMessage= "Too many requests have been made from this device. Try again later.";break;
            case "auth/internal-error":
              errorMessage= "An internal error has occurred. Please try again later.";break;
            default:
              errorMessage= "An unknown error occurred. Please try again later. "+errorCode;
          }
        return alert(errorMessage
            )
        }



    }


    return <div>


<FormTitle>
    Sign up with your email and password

</FormTitle>

    <form  onSubmit={handleSubmit}>

<FormInput label='Display name' type="text" required  name="displayName" value={formFields.displayName} onChange={handleChange} />
<FormInput  label="Email" type="email" required  name="email" value={formFields.email} onChange={handleChange}/>
<FormInput label="Password" type="password" required  name='password' value={formFields.password} onChange={handleChange} />

<FormInput label="password" type="password" required name='confirmPassword' value={formFields.confirmPassword} onChange={handleChange}/> 


<Button>Sign up</Button>
    </form>
  
    
    
    
    </div>
}