import React, { useState } from "react";
import Card from "../UI/Card";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseDate from "../Expenses/ExpenseDate";
const NewExpense = (props) => {
  const [formState, setFormState] = useState(false);
  const addNewExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };

    props.onNewExpenseAdd(newExpense);
    cancelHandler();
  };
  const cancelHandler = () => {
    setFormState(false);
  };
  const showFormHandler = () => {
    setFormState(true);
  };

  return (
    <Card className="new-expense">
      {formState === true ? (
        <ExpenseForm
          onAddNewExpense={addNewExpenseHandler}
          onCancel={cancelHandler}
        />
      ) : (
        <button onClick={showFormHandler}>Add Expense</button>
      )}
    </Card>
  );
};
export default NewExpense;
