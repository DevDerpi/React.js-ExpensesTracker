import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import ErrorImage from "../images/404.png";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <ul className="expenses-list__fallback">
        <img src={ErrorImage} />
        {/* No Expenses Found!. */}
      </ul>
    );
  }

  return (
    <ul className="expenses-list ">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
