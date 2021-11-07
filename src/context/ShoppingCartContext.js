import { createContext } from "react";

export const shoppingCartContext = createContext()
const user = 'hello'
export const ShoppingCartContextProvider = (props) => {

    const { children } = props;

    return (
        <shoppingCartContext.Provider value={{user}}>
            {children}
        </shoppingCartContext.Provider>
    )
}