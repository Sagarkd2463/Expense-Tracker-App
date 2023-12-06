import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState'; //returns the current context value 

export default function AddTransaction () { 
    const [text, setText] = useState(''); //a hook for updating text 
    const [amount, setAmount] = useState(0); //a hook for updating amount 

    const {addTransaction} = useContext(GlobalContext); //getting addtransaction from the context 

    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = { // a method for setting details for new transaction when user inputs 
        id: Math.floor(Math.random() * 100000000), //a unique id for each transaction 
        text,
        amount: +amount //making amount as integers 
      }

      addTransaction(newTransaction); //calling addtransaction by passing newTransaction method 
    }


  return (
   <>
   <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." /> 
          {/* setting a dynamic text value  */}
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br /></label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          {/* setting a dynamic amount value */}
        </div>
        <button className="btn">Add transaction</button>
      </form>
   </>
  )
}
