




 
// createUserDocFromAuth
import { useState } from 'react'
import './sign-up.style.scss'
import { createUserAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils'



const defaultFormFields={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:"",
}
export const SignUp=()=>{

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
        if(err.code=="auth/email-already-in-use"){
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

<label >
    <span>Display name</span>
    <input type="text" required  name="displayName" value={formFields.displayName} onChange={handleChange}/>
</label>
<label >
    <span>Email</span>
    <input type="email" required  name="email" value={formFields.email} onChange={handleChange}/>
</label>
<label >
    <span>Password</span>
    <input type="password" required  name='password' value={formFields.password} onChange={handleChange}/>
</label>
<label >
    <span>Confirm password</span>
    <input type="password" required name='confirmPassword' value={formFields.confirmPassword} onChange={handleChange}/>
</label>


<button>Sign up</button>
    </form>
  
    
    
    
    </div>
}