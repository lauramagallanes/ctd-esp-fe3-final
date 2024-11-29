import { createContext, useContext, useState, useReducer } from "react";

export const GlobalStates = createContext();

const Context = ({children}) => {
    console.log(children);
    
    return(
        <GlobalStates.Provider>
            {children}
        </GlobalStates.Provider>
    )
}

export default Context

export const useGlobalStates = () => useContext(GlobalStates);