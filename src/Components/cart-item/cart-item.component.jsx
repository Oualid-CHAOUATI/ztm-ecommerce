


import './cart-item.styles.scss';


export const CartItem=({ item:{imageUrl,price,quantity,name}})=>{


    return <div className='cart-item'>


        <img src={imageUrl} alt='cart-item__img'/>

        <div className='cart-item__info'>
        <p className='cart-item__name'>{name}</p>
        <p className='cart-item__price'>{price}$ x <span className='cart-item__quantity'>{quantity}</span></p>
        <p className='cart-item__total-price'>total {price*quantity}$</p>
        </div>
    </div>

}