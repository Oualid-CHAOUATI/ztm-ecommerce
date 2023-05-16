import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../product-card/product-card.component";

import "./category.styles.scss";
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
export const Category=()=>{


    const {categoriesMap}=useContext(CategoriesContext);
    const {category} =useParams();

    const [products,setProducts]=useState([]);

useEffect(()=>{
setProducts(categoriesMap[category]);

},[categoriesMap,category]);
    

    return <div className="category-preview">
        <h2 className="category-preview__title">{category}</h2>

        <div className="products-wrapper">

        {products.map(({id,name,imageUrl,price})=><ProductCard {...{name,imageUrl,price,key:id}}/>)}
        </div>
    </div> ;
}