


import { Button, BUTTON_TYPES } from '../mini-components/Button/Button.component'
import './product-card.style.scss'
export const ProductCard=({name,imageUrl,price})=>{

return <>
<div className="product"  >

<img src={imageUrl} alt={name} />
<p className="product__name">{name}</p>
<p className="product__price">${price}</p>
<Button  styleType={"product__btn "+BUTTON_TYPES.inverted} >add to cart</Button>
</div>


</>

}