

import { useContext } from 'react';
import { BUTTON_TYPES, Button } from '../mini-components/Button/Button.component';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';

export const CartDropdown=({})=>{

// console.log(open);

const {isDropdownOpen}=useContext(CartContext);

    return <div className='dropdown' open={isDropdownOpen}>
        <div className='cart-items'>

        </div>


<Button className="drop-down-checkout-btn"  styleType={BUTTON_TYPES.default}> got to checkout</Button>
    </div>
}