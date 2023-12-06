
import React, { createContext, useReducer } from 'react';
import AppReducer from '../context/AppReducer'; //getting reducer function 

const initialState = {
    transactions: []
} //an array of transactions 

//create context
export const GlobalContext = createContext(initialState); //creating a context value 

//provider component
export const GlobalProvider  = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); //a useReducer hook that is used for updating state values 
 
    //actions
    function deleteTransaction(id) {  //a function for deleting a transaction through its id 
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        }); //stating the action type 
    }

    function addTransaction(transaction) { //a function for adding a new transaction with new text and new amount 
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        });  //stating the action type 
    }

    return (
        //wrapping all the components in a provider 
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}> 
            {children} 
            {/* passing all the rest of the components as children */}
        </GlobalContext.Provider>
    )
}
