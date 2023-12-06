import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState'; //getting current context value 

export default function Transaction({transaction}) {
    const sign  = transaction.amount < 0 ? '-' : '+'; //getting sign according to the condition if amount < 0
    const {deleteTransaction} = useContext(GlobalContext); //getting deletetransaction from the context 

    return ( //assigning minus Or plus based on the amount user inputs 
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}> 
            {transaction.text} <span>{sign}Rs{Math.abs(transaction.amount)}</span>
            {/* setting absolute value of the amount */}
            <button className="delete-btn" onClick={()=> deleteTransaction(transaction.id)}>x</button> 
            {/* setting deletetransaction to the button by passing its id  */}
        </li>
    )
}
