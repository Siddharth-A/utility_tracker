import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { addLabels, fakeData } from "./data";

export default function Chart() {
  return (
    <BarChart
      dataset={fakeData}
      //   layout="horizontal"
      series={addLabels([
        { dataKey: "Alectra", stack: "liability" },
        { dataKey: "Bhydro", stack: "liability" },
        { dataKey: "Enbridge", stack: "liability" },
        { dataKey: "Reliance", stack: "liability" },
      ])}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      slotProps={{ legend: { position: { vertical: "bottom" }, itemMarkWidth:10, itemMarkHeight:5, itemGap:2 } }}
      width={420}
      height={400}
      margin={{ top: 30, bottom: 60 }}
    />
  );
}
