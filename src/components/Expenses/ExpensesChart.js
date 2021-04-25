import React from "react";
import Chart from "../Chart/Chart";
const ExpensesChart = (props) => {
//   const expenses = props.filteredExpenses;
//   const MonthesValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//      for (const expense of expenses){
//          switch (expense.date.toLocaleString("en-US", { month: "long" })) {
//              case "January" : MonthesValue[0]+= expense.amount.parseInt() ;
//              case "February" : MonthesValue[1]+= expense.amount.parseInt() ;
//              case "March" : MonthesValue[2]+= expense.amount.parseInt() ;
//              case "April" : MonthesValue[3]+= expense.amount.parseInt() ;
//              case "May" : MonthesValue[4]+= expense.amount.parseInt() ;
//              case "June" : MonthesValue[5]+= expense.amount.parseInt() ;
//              case "July" : MonthesValue[6]+= expense.amount.parseInt() ;
//              case "August" : MonthesValue[7]+= expense.amount.parseInt() ;
//              case "September" : MonthesValue[8]+= expense.amount.parseInt() ;
//              case "October" : MonthesValue[9]+= expense.amount.parseInt() ;
//              case "November" : MonthesValue[10]+= expense.amount.parseInt() ;
//              case "December" : MonthesValue[11]+= expense.amount.parseInt() ;

//          }
//      }
  const chartDataPoints = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sept",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];
  for (const expense of props.filteredExpenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};
export default ExpensesChart;
