import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../config";
import {Item} from "./Item";
import {Cart} from "./Cart";

function Main() {

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    /* Fetch Data From Server*/
    useEffect(() => {
        fetch(API_URL, {
            mode: "cors",
            headers: {
                Authorization: API_KEY
            }
        }).then((res) => res.json()).then((data) => setItems(data.shop));
    }, [])

    /* addToBasket Function */
    const addToBasket = (item) => {
        console.log(item);
        setCartItems([...cartItems, item]);
    };

    return <div className="container">
        <span>Hello</span><span className="material-icons">waving_hand</span>
        <div className="row">
            <div className="col s12"><span
                className="flow-text">This div is 12-columns wide on all screen sizes</span></div>
            <div className="col s6 offset-s6"><span className="flow-text">6-columns (offset-by-6)</span></div>
        </div>
        {/*{console.log(items.map((item) => ({...item})))}*/}

        {items.map((item, index) => (
            <Item key={index} addToBasket={addToBasket} {...item}  />
        ))}
        <Cart {...cartItems} />
    </div>
}

export default Main