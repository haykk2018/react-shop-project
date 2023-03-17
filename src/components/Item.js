function Item(props) {
    const {
        id,
        displayName,
        displayDescription,
        price,
        displayAssets,
        mainId,
        addToBasket = Function.prototype,
        quantity = 1,
    } = props;

    return <div className='card' id={id}>
        <div className='card-image'>
            <img src={displayAssets[0].url} alt={displayName}/>
        </div>
        <div className='card-content'>
            <span className='card-title'>{displayName}</span>
            <p>{displayDescription}</p>
        </div>
        <div className='card-action'>
            <button
                className='btn'
                onClick={() =>
                    addToBasket({
                        mainId,
                        displayName,
                        price,
                        quantity,
                    })
                }
            >
                BUY
            </button>
            <span className='right' style={{fontSize: '1.8rem'}}>
                    {price.regularPrice} $
                </span>
        </div>
    </div>

}

export {Item};