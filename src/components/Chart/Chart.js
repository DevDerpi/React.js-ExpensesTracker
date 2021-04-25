import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // let totalMax = 0;
  // for (const dataPoint of props.dataPoints) {
  //   if (dataPoint.value  > totalMax) {
  //     totalMax = dataPoint.value;
  //   }
  // }
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => 
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      )}
      {console.log(totalMax)}
    </div>
  );
};
export default Chart;

