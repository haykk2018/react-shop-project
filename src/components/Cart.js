function Cart(props) {

    let quantity = 0;
    Object.values(props).map((item) => quantity += item.quantity)
    return (
        <div className='cart blue darken-4 white-text'  // onClick={handleBasketShow}
        >
            <i className='material-icons'>shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : ""}
        </div>
    );
}

export {Cart};