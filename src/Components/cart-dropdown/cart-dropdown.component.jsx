

import { useContext } from 'react';
import { BUTTON_TYPES, Button } from '../mini-components/Button/Button.component';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { CartItem } from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

export const CartDropdown=({})=>{

    const {isDropdownOpen,setIsOpenDropdown}=useContext(CartContext);

    const navigate = useNavigate();
    const gotoCheckoutPage=()=>{
setIsOpenDropdown(false)
        navigate("./checkout");
    }
    const {cartItems,totalPrice,totalItems}=useContext(CartContext);



    return <div className='dropdown' open={isDropdownOpen}>
        <div className='cart-items'>
{cartItems.map(item=><CartItem id={item.id} item={item}/>)}
        </div>


<div>

    <p>total items {totalItems}</p>
    <p>total price {totalPrice}</p>
</div>
<Button className="drop-down-checkout-btn"  styleType={BUTTON_TYPES.default} onClick={gotoCheckoutPage}> got to checkout</Button>
    </div>
}