// sets up data layer
//TRACK THE BASKET 
import React, {createContext,userContext,useReducer} from "react";

//empty data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children})=>( 
	<StateContext.Provider value={useReducer(reducer, initialState)}>
	{children}
	</StateContext.Provider>
)
