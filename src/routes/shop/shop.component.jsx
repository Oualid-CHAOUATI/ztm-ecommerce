

import { useContext } from "react";
import "./shop.style.scss";
import { ProductsContext } from "../../contexts/products.context.jsx";
import { ProductCard } from "../../Components/product-card/product-card.component";
export const Shop=()=>{



    const {products}=useContext(ProductsContext);



return <>
<div className="products-wrapper">

{products.map(({id,name,imageUrl,price})=>{
    
    return <ProductCard   key={id}  {...{name,imageUrl,price}}/>

})}
</div>
</>
}