

import SHOP_DATA from "../../data/shop-data.json"
import "./shop.style.scss";
export const Shop=()=>{

console.log(SHOP_DATA);




return <>
<div className="products-wrapper">

{SHOP_DATA.map(({id,name,imageUrl,price})=>{
    
    return <div className="product"  key={id}>

    <img src={imageUrl} alt={name} />
    <p className="product__name">{name}</p>
    <p className="product__price">${price}</p>
</div>

})}
</div>
</>
}