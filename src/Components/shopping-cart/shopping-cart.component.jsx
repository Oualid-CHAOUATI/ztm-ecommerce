



import "./shopping-cart.styles.scss"
import imgUrl from "../../assets/icons/shopping-cart.svg"
export const ShoppingCart=()=>{


    return <div className="shopping-cart">

    <p className="shopping-cart__counter">1</p>
    {/* <img src="../../assets/icons/shopping-cart.svg" alt='cart-icon'/> */}
    <img src={imgUrl} alt='cart-icon'/>
    
    {/* <imgUrl/> */}
    </div> 
}