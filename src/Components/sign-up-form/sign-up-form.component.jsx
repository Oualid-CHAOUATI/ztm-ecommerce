




 
// createUserDocFromAuth
import { useState } from 'react'
import './sign-up-form.style.scss'
import { createUserAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { FormInput } from '../form-input/form-input.component'
import { Button } from '../Button/Button.component'



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
        if(err.code==="auth/email-already-in-use"){
            alert("error! email already in use !")
        return;
        }



        console.log("error at create user with email an password ");
        console.log(err)
    }

}
    return <div>

<h1>
    Sign up with your email and password
</h1>

    <form  onSubmit={handleSubmit}>

<FormInput label='Display name' type="text" required  name="displayName" value={formFields.displayName} onChange={handleChange} />
<FormInput  label="Email" type="email" required  name="email" value={formFields.email} onChange={handleChange}/>
<FormInput label="Password" type="password" required  name='password' value={formFields.password} onChange={handleChange} />

<FormInput label="password" type="password" required name='confirmPassword' value={formFields.confirmPassword} onChange={handleChange}/> 


<Button>Sign up</Button>
    </form>
  
    
    
    
    </div>
}