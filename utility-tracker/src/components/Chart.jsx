// Chart.jsx
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Button, ButtonGroup, Box, Select, MenuItem, InputLabel, FormControl, Checkbox, ListItemText } from "@mui/material";

import { addLabels, fakeData } from "./data";

export default function Chart() {
  const currentYear = new Date().getFullYear();
  const lastYear = currentYear - 1;

  const dataKeys = ["Alectra", "Bhydro", "Enbridge", "Reliance"];
  const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Initialize data structure with all months
  const processedData = allMonths.map((month) => ({
    month,
    [currentYear]: 0,
    [lastYear]: 0,
  }));

  // Populate the dataset with available data
  fakeData.forEach((item) => {
    const { month, year } = item;
    const total = dataKeys.reduce((sum, key) => sum + (item[key] || 0), 0);

    const monthIndex = allMonths.indexOf(month);
    if (monthIndex !== -1) {
      processedData[monthIndex][year] = total;
    }
  });

  return (
    <Box sx={{ p: 1 }}>
      <BarChart
        dataset={processedData}
        series={[
          { dataKey: lastYear, label: `${lastYear}`, color:"pink", barLabel: ({ value }) => `${value.toFixed(0)}`},
          { dataKey: currentYear, label: `${currentYear}`, color:"orange", barLabel: ({ value }) => `${value.toFixed(0)}`},
        ]}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        slotProps={{
          legend: {
            position: { vertical: "top", horizontal: "middle" },
            itemMarkWidth: 10,
            itemMarkHeight: 5,
            // itemGap: 4,
          },
        }}
        // barLabel="value"
        height={500}
        margin={{ top: 20, left:35, right:10 }}
        // leftAxis={null}
        grid={{ vertical:true, horizontal:true }}
      />
    </Box>
  );
}
