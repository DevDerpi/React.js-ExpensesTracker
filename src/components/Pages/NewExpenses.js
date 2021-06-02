import NewExpense from "../NewExpense/NewExpense";
import { useHistory } from "react-router-dom";

const NewExpensesPage = () => {
  const history = useHistory();
  const addNewExpenseHandler = (newExpenseData) => {
    fetch("https://expenses-a2d6c-default-rtdb.firebaseio.com/expenses.json", {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify(newExpenseData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/Expenses");
    });
  };
  return <NewExpense onNewExpenseAdd={addNewExpenseHandler} />;
};
export default NewExpensesPage;
