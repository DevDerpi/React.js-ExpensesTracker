import React from "react";
import Layout from "./components/layout/Layout";
import { Route, Switch } from "react-router-dom";
import ExpensesPage from "./components/Pages/ExpenseP";
import NewExpensesPage from "./components/Pages/NewExpenses";
/**const INITIAL_EXPENSES = [
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
];**/

function App() {
  /**const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addNewExpenseHandler = (newExpense) => {
    console.log("Hello From App.js");

    setExpenses((previousExpenses) => {
      return [newExpense, ...previousExpenses];
    });
  };**/
  return (
    <Layout>
      <Switch>
        <Route path="/Expenses" exact>
          <ExpensesPage />
        </Route>
        <Route path="/NewExpense">
          <NewExpensesPage />
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;
