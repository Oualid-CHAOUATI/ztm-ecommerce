

import { useContext } from "react";
import "./shop.style.scss";
import { ProductsContext } from "../../contexts/products.context.jsx";
export const Shop=()=>{



    const {products}=useContext(ProductsContext);



return <>
<div className="products-wrapper">

{products.map(({id,name,imageUrl,price})=>{
    
    return <div className="product"  key={id}>

    <img src={imageUrl} alt={name} />
    <p className="product__name">{name}</p>
    <p className="product__price">${price}</p>
</div>

})}
</div>
</>
}