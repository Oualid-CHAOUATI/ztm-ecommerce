



import "./shopping-cart.styles.scss"
import imgUrl from "../../assets/icons/shopping-cart.svg"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
export const ShoppingCart=()=>{



    const {setIsOpenDropdown}=useContext(CartContext);
    const toggleIsDropdonwOpen=()=>{
        setIsOpenDropdown(state=>!state);
    }

    return <div className="shopping-cart" onClick={toggleIsDropdonwOpen} >

    <p className="shopping-cart__counter">1</p>
    {/* <img src="../../assets/icons/shopping-cart.svg" alt='cart-icon'/> */}
    <img src={imgUrl} alt='cart-icon'/>
    
    {/* <imgUrl/> */}
    </div> 
}