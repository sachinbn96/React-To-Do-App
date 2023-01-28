import React, {useState} from 'react'

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

    const [expenses,setExpenses]= useState(DUMMY_EXPENSES);

  //u can pass data from parent to child using props
  // and from child to parent by lifting state up
  //u cant directly share data with other components, u have to follow the tree 

  const addExpenseHandler = (expense) => {
    console.log("new expense",expense);
    setExpenses((prevExpenses)=>{   
      // console.log([expense,...prevExpenses]);           //right way to update state when it depends on prev state
      return [expense,...prevExpenses];
    })
  };
  console.log("stateexpense",expenses)
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <ul>
      {[<li><h1>number 1</h1></li>,<li><h1>number 2</h1></li>,<li><h1>number 3</h1></li>]}  
      </ul> */}

      {/* react will render array of jsx elemenets within curly brackets */}

      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
