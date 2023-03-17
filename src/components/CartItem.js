function CartItem(props) {
    const {
        id,
        displayName,
        displayDescription,
        price,
        quantity,
        mainId,
        displayAssets,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
        removeFromBasket = Function.prototype,
    } = props;
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