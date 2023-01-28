import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing,setIsEditing]=useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
       props.onAddExpense(expenseData); //lifting state up
       setIsEditing(false);
    }

    const startEditingHandler=()=>{
        setIsEditing(true)
    }
    const stopEditingHandler=()=>{
        setIsEditing(false)
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm stopEditingHandler={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />} {/* u send this function as props to child component, 
                                                                       this is how child to parent data communication  happens */}
    </div>
};

export default NewExpense;