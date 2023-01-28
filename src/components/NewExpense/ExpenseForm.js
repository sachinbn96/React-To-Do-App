import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const titleChangeHandler = (event) => {                //since onChange is pointing to this function, this funvtion has access tot he event object
        // console.log(event.target.value)                    //event.target.value will give current updated value with every change i.e.,keystroke
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {                
        setEnteredAmount(event.target.value)                //event.target.value will always be a string thats why initialised useState('') with empty string
    }
    const dateChangeHandler = (event) => {                
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();                     //form submit event will refresh page and send a request..this function disables that
        const expenseData = {
            title: enteredTitle,                    //since these are state variables the current value in that state is taken for this object
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }
        // console.log("new epxense",expenseData);
        props.onSaveExpenseData(expenseData); //lifting state up

        setEnteredTitle('');    //so once u recieve the data the form should be empty again thats why we're setting to ''..
        setEnteredAmount('');   //dont forget to have value atribute in the input tags - 2 way binding
        setEnteredDate('');     //so if u dont have value attribute in input tag, the field wont become blank

    }
    return <form onSubmit={submitHandler}> {/*on submit for form elemnt coz evry form element already has as submit event, dont use event handler in button */}
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>     {/*advantage of onChange it works for every keystroke and it works for drop downs */}
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit' onClick={props.stopEditingHandler}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;