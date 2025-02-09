import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import { PieChart } from "@mui/x-charts/PieChart";
import { addLabels, fakeData } from "./data";

const IndPaper = styled(Paper)(({ theme }) => ({
  width: 400,
  height: 400,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  // textAlign: 'center',
  borderRadius: "12px",
  boxShadow: theme.shadows[5],
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export default function Pie() {
  const currentMonth = new Date().toLocaleString("Default", { month: "short" });
  const currentMonthData = fakeData.find((item) => item.month === currentMonth);
  const dataKeys = ["Alectra", "Bhydro", "Enbridge", "Reliance"];
  const pieData = dataKeys.map((key, index) => ({
    id: index,
    value: currentMonthData ? currentMonthData[key] : 0,
    label: key,
  }));

  const palette = ["#79C99E", "#02A9EA", "#E09F3E", "#F9627D"];

  return (
    // <PieChart
    //   colors={palette}
    //   slotProps={{
    //     legend: {
    //       position: { vertical: "bottom", horizontal: "right" },
    //       direction: "row",
    //       padding: { top: 4, left: 1, right: 0 },
    //     },
    //   }}
    //   margin={{ left: 20, right: 0 }}
    //   series={[
    //     {
    //       arcLabel: (item) => `$${item.value}`,
    //       highlightScope: { fade: "global", highlight: "item" },
    //       faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
    //       innerRadius: 50,
    //       outerRadius: 150,
    //       paddingAngle: 4,
    //       cornerRadius: 4,
    //       data: pieData,
    //     },
    //   ]}
    //   width={400}
    //   height={400}
    // />
    <Stack direction="row" spacing={10} sx={{ margin: 2 }}>
    <IndPaper square={false} elevation={10}>
        xxxxxxxx
        <PieChart
        colors={palette}
        slotProps={{
            legend: {
            position: { vertical: "bottom", horizontal: "right" },
            direction: "row",
            padding: { top: 4, left: 1, right: 0 },
            },
        }}
        margin={{ left: 20, right: 0 }}
        series={[
            {
            arcLabel: (item) => `$${item.value}`,
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            innerRadius: 50,
            outerRadius: 150,
            paddingAngle: 4,
            cornerRadius: 4,
            data: pieData,
            },
        ]}
        width={400}
        height={400}
        />
    </IndPaper>
  </Stack>
  );
}
