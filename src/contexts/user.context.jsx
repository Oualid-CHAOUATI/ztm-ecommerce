import { createContext, useEffect, useReducer, useState } from "react";

import { onAuthStateChangedListener,createUserDocFromAuth } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/firebase/reducer/reducer.utils";

export const UserContext= createContext({

    currentUser:null,
    setCurrentUser:()=>null
}) ;

const USER_REDUCER_ACTION_TYPES= {SET_CURRENT_USER:"SET_CURRENT_USER"}

const userReducer = (state,action)=>{
;
const {type,payload}=action;

switch(type){
     case USER_REDUCER_ACTION_TYPES.SET_CURRENT_USER:return {currentUser:payload}
     default: throw new Error ('Invalid action type in user Reducer');
}
}

const INITIAL_STATE={currentUser:null};
export const UserProvider=({children})=>{

const [{currentUser},dispatch]=useReducer(userReducer,INITIAL_STATE);

const setCurrentUser=(user)=>dispatch(
    
    createAction(USER_REDUCER_ACTION_TYPES.SET_CURRENT_USER,user)
    
    
    );
const value={currentUser,setCurrentUser};

useEffect(()=>{

const unsubsribe = onAuthStateChangedListener((user)=>{
    if(user)createUserDocFromAuth(user); // et dans createUserDonc .. si une snapshot existe .. enregstre .. sinon ne rien faire
// console.log(user);
setCurrentUser(user)
})



return unsubsribe;



},[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


