




 
// createUserDocFromAuth
import { useState } from 'react'
import './sign-in-form.style.scss'
// import { createUserAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { FormInput } from '../form-input/form-input.component'
import { Button, buttonTypes } from '../Button/Button.component'
import { createUserDocFromAuth, signInUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'





const defaultFormFields={
    email:"",
    password:"",
}
export const SignInForm=()=>{
    const logGoogleUser = async ()=>{

        const {user} = await signInWithGooglePopup();
        createUserDocFromAuth(user);
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

       await signInUserWithEmailAndPassword(email,password);
        setFromFields(defaultFormFields);
        
    }catch(err){
        // if(err.code==="auth/email-already-in-use"){
        //     alert("error! email already in use !")
        // return;
        // }



        console.log("error sign in user with email an password ");
        console.log(err)
    }

}
    return <div>

<h1>
    Sign up with your email and password
</h1>

    <form  onSubmit={handleSubmit}>

<FormInput  label="Email" type="email" required  name="email" value={formFields.email} onChange={handleChange}/>
<FormInput label="Password" type="password" required  name='password' value={formFields.password} onChange={handleChange} />




<Button onClick={handleSubmit}>Sign In</Button>
    <Button style={{marginTop:"1em"}} className={buttonTypes.google} onClick={logGoogleUser}>Sign in with google popup</Button>
    </form>
  
    
    
    
    </div>
}