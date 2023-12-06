import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; //getting current context value 
import Transaction from './Transaction'; //getting each transaction 

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext); //getting transaction from the context 

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction}/> ))}
        {/* mapping transactions with each transaction and its id*/}
      </ul>
    </>
  )
}
