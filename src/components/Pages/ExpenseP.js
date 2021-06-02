import Expenses from "../Expenses/Expenses";
import React, { useState, useEffect } from "react";
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
const ExpensesPage = () => {
  const [loadedExpenses, setLoadedExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://expenses-a2d6c-default-rtdb.firebaseio.com/expenses.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const expenses = [];
        for (const key in data) {
          const expense = {
            id: key,
            ...data[key],
          };
          expenses.push(expense);
        }
        setIsLoading(false);
        setLoadedExpenses(expenses);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return <Expenses expenses={loadedExpenses}></Expenses>;
};
export default ExpensesPage;
