import React, { createContext, useContext, useReducer } from "react";

//prepares the data layer (Context API)
export const StateContext= createContext();
//wrap our app and provide the data layer
export const StateProvider=({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
//to pull the info from data layer
export const useStateValue =() => useContext(StateContext);
