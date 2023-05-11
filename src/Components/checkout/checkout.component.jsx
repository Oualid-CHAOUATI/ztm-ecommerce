import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";


export const Checkout = ()=>{

const {addItemToCart,cartItems,totalItems,totalPrice,removeItemFromCart,clearAll}=useContext(CartContext)



    return <div>

<table className="checkout-table">
    <thead >
        <th>Product</th>
        <th>Description</th>
        <th>quantity</th>
        <th>price</th>
        <th>remove</th>
    </thead>
    <tbody >
        {cartItems.map(item=><tr key={item.id}>

            <td><img src={item.imageUrl} alt={item.name}/></td>
            <td>{item.name}</td>
            <td>
                
                <button className="checkout-btn__remove" hide={item.quantity===1?"true":false } onClick={()=>{
                    
                    if(item.quantity>1)
                    addItemToCart(item,-1)}}>-</button>
                {item.quantity}
                <button className="checkout-btn__add" onClick={()=>addItemToCart(item)}>+</button>
                </td>
            <td>
                <p>

                {item.price}
                </p>
                <p>
                    {item.price*item.quantity}
                </p>
                
                </td>
            <td><button className="checkout-btn__clear"  onClick={()=>{
                removeItemFromCart(item);
            }}>x</button></td>
        </tr>)}

    </tbody>
        <tfoot>
            <th>Total</th>
            <td></td>
            <td> {totalItems}</td>
            <td> {totalPrice}</td>
            <td> <button className="checkout-btn__clear-all" onClick={clearAll}>Clear All</button></td>
        </tfoot>
</table>

    </div>
}