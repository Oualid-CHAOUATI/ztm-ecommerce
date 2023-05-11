import { createContext, useState } from "react"






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
    addItemToCart:()=>null,
    totalPrice:0,
    totalItems:0,
};
export const CartContext= createContext(defaultValue)
export const CartProvider=({children})=>{

const [totalPrice,setTotalPrice]=useState(0);
const [totalItems,setTotalItems]=useState(0);
    const [isDropdownOpen,setIsOpenDropdown]=useState(false);
    const [cartItems,setCartItems]=useState([]);

    const addItemToCart = (itemToAdd,number=1)=>{
        setTotalPrice(p=>p+itemToAdd.price*number);
        setTotalItems(n=>n+number);
        setCartItems(addCartItem(cartItems,itemToAdd,number));
    }
   


    const removeItemFromCart=(itemToRemove)=>{

        const index = cartItems.findIndex(item=>itemToRemove.id===item.id);  
        
        
        if(index === -1)return;
        setTotalItems(n=>n-itemToRemove.quantity);
        setTotalPrice(p=>p-itemToRemove.quantity*itemToRemove.price);

        cartItems.splice(index,1);
        setCartItems([...cartItems])
    
    }


    const clearAll=()=>{
        setCartItems([]);
        setTotalItems(0);
        setTotalPrice(0);
    }
    const value={isDropdownOpen,setIsOpenDropdown,cartItems,setCartItems,addItemToCart,totalItems,totalPrice,removeItemFromCart,clearAll}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>  

}