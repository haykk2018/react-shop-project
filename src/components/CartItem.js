function CartItem(props) {
    const {
        id,
        displayName,
        displayDescription,
        price,
        quantity,
        mainId,
        displayAssets,
        addToBasket = Function.prototype,
        removeFromBasket = Function.prototype,
    } = props;
    return <>
        <li className='collection-item'>
            {displayName}{' '}
            <i className='material-icons basket-quantity'> remove </i>
            {' x' + quantity + ' '}
            <i className='material-icons basket-quantity'> add </i>
            {' '} = {price.regularPrice * quantity} $.
            <span className='secondary-content' onClick={() => removeFromBasket(mainId)}>
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    </>
}

export {CartItem};