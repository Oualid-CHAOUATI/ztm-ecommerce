import { createContext, useState ,useReducer } from "react"






function addCartItem(itemsList,itemToAdd,number){
    const existingItem=itemsList.find(item=>item.id===itemToAdd.id);
    if(existingItem) {
        existingItem.quantity+=number;
    }
    else{
        itemsList.push({...itemToAdd,quantity:1})
    }
    return [...itemsList];
}

const defaultValue={
    isDropdownOpen:false,
    setIsOpenDropdown:()=>null,
    cartItems:[],
    totalPrice:0,
    totalItems:0,
};
const INITIAL_STATE={
    totalItems:0,
    totalPrice:0,
    cartItems:[],

}


export const CART_REDUCER_ACTIONS={
    SET_CART_ITEMS:"SET_CART_ITEMS",
}

const cartReducer = (state,action)=>{
    const {type,payload}=action;


    switch(type){

        case CART_REDUCER_ACTIONS.SET_CART_ITEMS:return {...state,...payload};
        default:throw new Error(`unhandled type of ${type}in cartReducer`)
          
    }
}


export const CartContext= createContext(defaultValue)
export const CartProvider=({children})=>{

    const [state,dispatch]=useReducer(cartReducer,INITIAL_STATE);
    const {cartItems,totalPrice,totalItems} = state;

    console.log(cartItems);
    console.log(totalItems);
    const [isDropdownOpen,setIsOpenDropdown]=useState(false);

 
   
    const updateCartItems =(newCartItems)=>{
        

        const totalItems= newCartItems.reduce((acc,item)=>{
            acc+=item.quantity;
            return acc;
        },0);
        
        const totalPrice= newCartItems.reduce((acc,item)=>{
            acc+=item.price*item.quantity;
            return acc;
        },0);
        

        const payload={cartItems:newCartItems,totalPrice,totalItems};
        dispatch({type:CART_REDUCER_ACTIONS.SET_CART_ITEMS,payload})
        
        }

        const addItemToCart = (itemToAdd,number=1)=>{
            updateCartItems(addCartItem(cartItems,itemToAdd,number));
        }

    const removeItemFromCart=(itemToRemove)=>{
        const index = cartItems.findIndex(item=>itemToRemove.id===item.id);         
        if(index === -1)return;
        updateCartItems([...cartItems.splice(index,1)]);
        
    }
    
    
    const clearAll=()=>{
        updateCartItems([]);
    }
    const value={isDropdownOpen,setIsOpenDropdown,cartItems,totalItems,totalPrice,addItemToCart,removeItemFromCart,clearAll}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>  

}