import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenses = props.expenses;

  const filterChangeHandler = (filteredYear) => {
    console.log(filteredYear + " From Expenses");
    setFilteredYear(filteredYear);
  };
  

  const filteredExpenses = expenses.filter((expenseItem) => {
    let newDate = new Date(expenseItem.date);
    console.log(newDate.getFullYear());
    return newDate.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart filteredExpenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        {/* {filteredExpenses.length === 0 && <p>No Entries Found </p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))} */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No Entries Found </p>
        ) : (
          filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
};
export default Expenses;
