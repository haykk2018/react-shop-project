import {createContext} from "react";


export const ShopContext = createContext();

export const ContextProvider = ({children}) => {
    const value = {
        testContext: "context is working"
    }
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
};