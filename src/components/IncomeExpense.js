import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; //getting current context value 

export default function IncomeExpense() {

  const { transactions } = useContext(GlobalContext); //get transaction from the context 

  const amounts = transactions.map((transaction) => transaction.amount); //mapping transactions by getting each transaction amount for each item 

  const income = ( 
    amounts
      .filter((item) => item > 0) //filtering an array according to the condition 
      .reduce((acc, item) => (acc += item), 0) //getting approximate cost of items from the filtered array 
  ).toFixed(2);

  const expense = (
    amounts
      .filter(item => item < 0)  //filtering an array according to the condition 
      .reduce((acc, item) => (acc += item), 0)  //getting approximate cost of items from the filtered array 
  ).toFixed(2);


  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  )

}

