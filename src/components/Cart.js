function Cart(props) {

    let quantity = 0;
    Object.values(props).map((item) => quantity += item.quantity)

    const showCartContent = () => document.getElementById('cart').style.display = 'block';

    return <div className='cart blue darken-4 white-text' onClick={showCartContent}>
        <i className='material-icons'>shopping_cart</i>
        <span className='cart-quantity'>{!!quantity && quantity}</span>
    </div>;
}

export {Cart};