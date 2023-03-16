function Cart(props) {
    // const { quantity = 0, handleBasketShow = Function.prototype } = props;
    // const [quantity,setQuantity] = useState(Object.keys(props).length);
    const quantity = Object.keys(props).length;
     //setQuantity(Object.keys(props).length) ;
    console.log(Object.keys(props).length);
    console.log(props);

    return (
        <div className='cart blue darken-4 white-text'  // onClick={handleBasketShow}
        >
            <i className='material-icons'>shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : ""}
        </div>
    );
}

export {Cart};