import { createContext, useState } from "react"






function addCartItem(itemsList,itemToAdd){
    const existingItem=itemsList.find(item=>item.id===itemToAdd.id);
    if(existingItem) {
        existingItem.quantity++;
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

    const addItemToCart = (itemToAdd)=>{
        setTotalPrice(p=>p+itemToAdd.price);
        setTotalItems(n=>n+1);
        setCartItems(addCartItem(cartItems,itemToAdd));
    }
   

    const value={isDropdownOpen,setIsOpenDropdown,cartItems,setCartItems,addItemToCart,totalItems,totalPrice}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>  

}