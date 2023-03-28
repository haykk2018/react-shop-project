import {createContext, useReducer} from "react";
import {reducer} from './reducer';

const initialState = {
    cartItems: [],
};

export const ShopContext = createContext();

export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(reducer, initialState);

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item});
    };
    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}});
    };
    value.incQuantity = (itemId) => {
        dispatch({type: 'INCREMENT_QUANTITY', payload: {id: itemId}});
    };
    value.decQuantity = (itemId) => {
        dispatch({type: 'DECREMENT_QUANTITY', payload: {id: itemId}});
    };


    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
};