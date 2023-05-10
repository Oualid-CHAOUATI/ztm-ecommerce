import { createContext, useState } from "react"







const defaultValue={
    isDropdownOpen:false,
    setIsOpenDropdown:()=>null,
};
export const CartContext= createContext(defaultValue)
export const CartProvider=({children})=>{


    const [isDropdownOpen,setIsOpenDropdown]=useState(false);
   

    const value={isDropdownOpen,setIsOpenDropdown}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>  

}