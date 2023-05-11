

import { useContext } from 'react';
import { BUTTON_TYPES, Button } from '../mini-components/Button/Button.component';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { CartItem } from '../cart-item/cart-item.component';

export const CartDropdown=({})=>{

    const {cartItems,totalPrice,totalItems}=useContext(CartContext);

// console.log(open);

const {isDropdownOpen}=useContext(CartContext);

    return <div className='dropdown' open={isDropdownOpen}>
        <div className='cart-items'>
{cartItems.map(item=><CartItem id={item.id} item={item}/>)}
        </div>


<div>

    <p>total items {totalItems}</p>
    <p>total price {totalPrice}</p>
</div>
<Button className="drop-down-checkout-btn"  styleType={BUTTON_TYPES.default}> got to checkout</Button>
    </div>
}