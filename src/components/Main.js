import {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../config";
import {Item} from "./Item";
import {Cart} from "./Cart";
import {CartContent} from "./CartContent";

const Main = () => {

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

        let already_exist_same = false;
        if (cartItems.length) {

            const updatedCartItems = cartItems.map((ci) => {
                    // ci.mainId === item.mainId ? {...ci, quantity: ci.quantity + 1} : ci
                    if (ci.mainId === item.mainId) {
                        already_exist_same = true;
                        return {...ci, quantity: ci.quantity + 1};
                    } else {
                        return ci
                    }
                }
            )

            if (already_exist_same) setCartItems(updatedCartItems)
            else setCartItems([...cartItems, item])
        } else {
            setCartItems([...cartItems, item]);
        }
    };

    /* remove from basket */
    const removeFromBasket = (mainId) => {
        const updatedCartItems = cartItems.filter(i => i.mainId !== mainId);
        setCartItems(updatedCartItems);
    };
    /* increment basket item quantity */
    const incQuantity = (mainId) => {
        const updatedCartItems = cartItems.map(ci =>
            ci.mainId === mainId ? {...ci, quantity: ci.quantity + 1} : ci
        )
        setCartItems(updatedCartItems);
    };
    /* decrement basket item quantity */
    const decQuantity = (mainId) => {
        const updatedCartItems = cartItems.map(ci =>
            ci.mainId === mainId ? {...ci, quantity: ci.quantity - 1} : ci
        )
        setCartItems(updatedCartItems);
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
            //console.log(item)
            <Item key={index} addToBasket={addToBasket} {...item}  />
        ))}
        <Cart {...cartItems} />
        <CartContent cartItems={cartItems} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity}/>
    </div>
}

export default Main