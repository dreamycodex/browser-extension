import { createContext, useContext, useReducer } from 'react';
import { browserReducer } from '../reducer/browser-reducer';

const initialValue = {
    name: ""
}

const BrowserContext = createContext(initialValue);

const BrowserProvider = ({children}) => {

    const [ {name}, browserDispatch ] = useReducer(browserReducer, initialValue)

    return (
        <BrowserContext.Provider value={{name, browserDispatch}}>
        {children}
        </BrowserContext.Provider>
    )
}

const useBrowser = () => useContext(BrowserContext);

export { useBrowser, BrowserProvider }