import {CartItem} from "./CartItem";
import {useContext} from "react";
import {ShopContext} from "../context";

const CartContent = ({removeFromBasket, incQuantity, decQuantity}) => {

    const {cartItems} = useContext(ShopContext);
    let totalPrice = 0;
    const hideCartContent = () => document.getElementById('cart').style.display = 'none';

    return <ul className='collection cart-content' id="cart">
        <li className='collection-item active'>Cart</li>
        {cartItems.length ? cartItems.map((i, index) => {
            totalPrice += i.price.regularPrice * i.quantity;
            return <CartItem {...i}
                             removeFromBasket={removeFromBasket}
                             incQuantity={incQuantity}
                             decQuantity={decQuantity}
                             key={index}/>;
        }) : <li className='collection-item'>Cart empty</li>}
        <li className='collection-item active'> Total amount: {totalPrice}$</li>
        <li className='collection-item'>
            <button className='btn btn-small yellow darken-4'>checkout</button>
        </li>
        <i className='material-icons basket-close' onClick={hideCartContent}> close </i>
    </ul>

}

export {CartContent};