import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const INITIAL_EXPENSES = [
  { id: "el2", title: "Chipsy", amount: 5, date: new Date(2021, 3, 15) },
  { id: "el1", title: "Zbady", amount: 2.5, date: new Date(2021, 3, 14) },
  { id: "el3", title: "Panadol", amount: 25, date: new Date(2021, 3, 15) },
  {
    id: "el4",
    title: "Fanta Orange",
    amount: 5,
    date: new Date(2021, 3, 15),
  },
  {
    id: "el5",
    title: "Molto Magnam",
    amount: 5,
    date: new Date(2021, 3, 15),
  },
  {
    id: "el6",
    title: "كنافة",
    amount: 25,
    date: new Date(2021, 3, 16),
  },
  {
    id: "el7",
    title: "كرانشي",
    amount: 5,
    date: new Date(2021, 3, 16),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addNewExpenseHandler = (newExpense) => {
    console.log("Hello From App.js");

    setExpenses((previousExpenses) => {
      return [newExpense, ...previousExpenses];
    });
  };
  return (
    <div>
      <h1>Expenses Application </h1>
      <NewExpense onNewExpenseAdd={addNewExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
