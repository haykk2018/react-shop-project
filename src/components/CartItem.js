import {useContext} from "react";
import {ShopContext} from "../context";


function CartItem(props) {
    const {
        displayName,
        price,
        quantity,
        mainId,
    } = props;

    const {removeFromBasket, incQuantity, decQuantity} = useContext(
        ShopContext
    );

    return <>
        <li className='collection-item'>
            {displayName}{' '}
            <i className='material-icons basket-quantity' onClick={() => decQuantity(mainId)}> remove </i>
            {' x' + quantity + ' '}
            <i className='material-icons basket-quantity' onClick={() => incQuantity(mainId)}> add </i>
            {' '} = {price.regularPrice * quantity} $.
            <span className='secondary-content' onClick={() => removeFromBasket(mainId)}>
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    </>
}

export {CartItem};