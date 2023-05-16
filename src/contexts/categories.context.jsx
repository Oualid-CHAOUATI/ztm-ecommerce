import { createContext, useEffect, useState } from "react";


import {SHOP_DATA} from "../data/shop-data"
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

const DEFAULT_STATE={
    categoriesMap:[]
}
export const CategoriesContext = createContext(DEFAULT_STATE);



export const CategoriessProvider=({children})=>{



    const [categoriesMap,setCategoriesMap]=useState({});
    // const [products,setProducts]=useState(SHOP_DATA);



    useEffect(()=>{

        const  func=async()=>{
            const categoriesMap= await getCategoriesAndDocuments();
            console.log(categoriesMap);
            setCategoriesMap(categoriesMap)

        }

        func();

    },[])
    const value ={ categoriesMap, setCategoriesMap};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}