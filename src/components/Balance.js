import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; //getting current context value 

export default function Balance() {

    const {transactions} = useContext(GlobalContext); //get transaction from the context 

    const amounts = transactions.map((transaction) => transaction.amount); //mapping each transaction with its amount 
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); //getting total by calculating approximate cost of items in an array
    
    return (
        <>
            <h4>Your Balance</h4>
            <h1>{total}</h1>
        </>
    )
}

