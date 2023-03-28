import {useContext, useEffect, useState} from "react";
import {API_KEY, API_URL} from "../config";
import {CartContent} from "./CartContent";
import {Item} from "./Item";
import {Cart} from "./Cart";
import {ShopContext} from "../context";

const Main = () => {

    const {cartItems} = useContext(ShopContext);
    const [items, setItems] = useState([]);
    /* Fetch Data From Server*/
    useEffect(() => {
        fetch(API_URL, {
            mode: "cors",
            headers: {
                Authorization: API_KEY
            }
        }).then((res) => res.json()).then((data) => setItems(data.shop));
    }, [])

    return <>
        <main className='container content'>
            <div className='items'>
                {items.map((item, index) => (
                    <Item key={index}  {...item}  />
                ))}
            </div>
            <Cart {...cartItems} />
            <CartContent/>
        </main>
    </>
}

export default Main