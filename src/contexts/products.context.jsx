import { createContext, useEffect, useState } from "react";


import {SHOP_DATA} from "../data/shop-data"
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

const DEFAULT_STATE={
    products:[]
}
export const ProductsContext = createContext(DEFAULT_STATE);



export const ProductsProvider=({children})=>{



    const [products,setProducts]=useState([]);
    // const [products,setProducts]=useState(SHOP_DATA);



    useEffect(()=>{

        const  func=async()=>{
            const categoryMap= await getCategoriesAndDocuments();
            console.log(categoryMap);

        }

        func();

    },[])
    const value ={ products, setProducts};
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}