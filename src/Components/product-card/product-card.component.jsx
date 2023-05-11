


import { useContext } from 'react'
import { Button, BUTTON_TYPES } from '../mini-components/Button/Button.component'
import './product-card.style.scss'
import { CartContext } from '../../contexts/cart.context'
export const ProductCard=({name,imageUrl,price,id})=>{

    const {addItemToCart}=useContext(CartContext);

    const addItem=()=>addItemToCart({id,name,imageUrl,price});

return <>
<div className="product"  >

<img src={imageUrl} alt={name} />
<p className="product__name">{name}</p>
<p className="product__price">${price}</p>
<Button  styleType={"product__btn "+BUTTON_TYPES.inverted}  onClick={addItem}>add to cart</Button>
</div>


</>

}