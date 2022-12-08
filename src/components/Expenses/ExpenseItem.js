import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
function ExpenseItem(props) {
  //const expenseDate = new Date(2021, 2, 28);
  //const expenseTitle = "Car Insurance";
  //const expenseAmount = 294.67;

  
  return (
    <Card className="expense-item">
      {/* <div>March 28th 2021</div> */}
      {/* <div>{expenseDate.toISOString()}</div> */}
      {/* <div>{props.date.toISOString()}</div> */}
      {/* <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div> */}
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="expense-item__description">
        {/* <h2>Car Insurance</h2> */}
        <h2>{props.title}</h2>
        {/* <h2>{expenseTitle}</h2> */}
        {/* <div className="expense-item__price">$294.67</div> */}
        {/* <div className="expense-item__price">${expenseAmount}</div> */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={() => {console.log('Clicked')}}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
