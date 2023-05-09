import { createContext, useState } from "react";


import SHOP_DATA from "../data/shop-data.json"

const DEFAULT_STATE={
    products:[]
}
export const ProductsContext = createContext(DEFAULT_STATE);



export const ProductsProvider=({children})=>{



    const [products,setProducts]=useState(SHOP_DATA);

    const value ={ products, setProducts};
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}