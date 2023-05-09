import { createContext, useEffect, useState } from "react";

import { onAuthStateChangedListener,createUserDocFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext= createContext({

    currentUser:null,
    setCurrentUser:()=>null
}) ;




export const UserProvider=({children})=>{

const [currentUser,setCurrentUser] = useState(null);
const value={currentUser,setCurrentUser};


useEffect(()=>{

const unsubsribe = onAuthStateChangedListener((user)=>{
    if(user)createUserDocFromAuth(user); // et dans createUserDonc .. si une snapshot existe .. enregstre .. sinon ne rien faire
console.log(user);
setCurrentUser(user)
})



return unsubsribe;



},[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


