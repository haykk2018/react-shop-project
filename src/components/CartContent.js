import {CartItem} from "./CartItem";

const CartContent = ({cartItems,removeFromBasket}) => {
    let totalPrice = 0;

    return <ul className='collection cart-content'>
        <li className='collection-item active'>Cart</li>
        {cartItems.length ?
            cartItems.map((i, index) => {
                totalPrice += i.price.regularPrice * i.quantity;
                return <CartItem {...i} removeFromBasket={removeFromBasket} key={index} />;
            })
            : <li className='collection-item'>Cart empty</li>
        }
        <li className='collection-item active'> Total amount: {totalPrice}$</li>
        <li className='collection-item'>
            <button className='btn btn-small yellow darken-4'>checkout</button>
        </li>
        <i className='material-icons basket-close'> close </i>
    </ul>

}

export {CartContent};