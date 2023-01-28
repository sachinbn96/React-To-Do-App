import React from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  //component functions can be arrow functions as well
  const [dateFilter, setDateFilter] = React.useState("2020");
  const filterChangeHandler = (selectedYear) => {
    // console.log("selected date",selectedYear);
    setDateFilter(selectedYear);
    // console.log("inside func", dateFilter);
  };
//   console.log("outside func", dateFilter);
  const filteredArray = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === dateFilter;
  });

//   let expensesContent = <p>No expenses found!</p>;

//   if (filteredArray.length > 0) {
//     expensesContent = filteredArray.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}
//       />
//     ));
//   }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedDate={dateFilter}
          onAddDate={filterChangeHandler}
        />

        {/* u can use two && statements instead of ? */}
        {/* or keep all the logic above, outside the jsx return */}
        {/* {filteredArray.length === 0 ? (
          <p>No expenses found!</p>
        ) : (
          filteredArray.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* {expensesContent} */}
        <ExpensesList items={filteredArray}/>
      </Card>
    </div>
  );
    }

export default Expenses;
