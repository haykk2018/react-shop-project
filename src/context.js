import {createContext, useReducer} from "react";
import {reducer} from './reducer';

const initialState = {
    items: [],
    cartItems: [],
};

export const ShopContext = createContext();

export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(reducer, initialState);

    value.addToBasket = (item) => {
        dispatch({ type: 'ADD_TO_BASKET', payload: item });
    };

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
};