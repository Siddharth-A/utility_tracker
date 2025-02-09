import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import { PieChart } from "@mui/x-charts/PieChart";
import { addLabels, fakeData } from "./data";
import { Typography } from "@mui/material";

import { lightTheme, darkTheme } from "./../theme";

const IndPaper = styled(Paper)(({ theme }) => ({
  width: 370,
  height: 400,
  padding: theme.spacing(2),
  ...theme.typography.h6,
  borderRadius: "12px",
  boxShadow: theme.shadows[5],
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export default function Pie() {
  const currentMonth = new Date().toLocaleString("Default", { month: "short" });
  const currentMonthData = fakeData.find((utl) => utl.month === currentMonth);
  const dataKeys = ["Alectra", "Bhydro", "Enbridge", "Reliance"];
  const pieData = dataKeys.map((key, index) => ({
    id: index,
    value: currentMonthData ? currentMonthData[key] : 0,
    label: key,
  }));

//   const palette = [`{theme.Alectra}`, "#02A9EA", "#E09F3E", "#F9627D"];
const colorPalette = [
    {...pieData[0], color:darkTheme.palette.Alectra.main},
    {...pieData[1], color:darkTheme.palette.Bhydro.main},
    {...pieData[2], color:darkTheme.palette.Enbridge.main},
    {...pieData[3], color:darkTheme.palette.Reliance.main},
];

  return (
    <Stack direction="row" spacing={10} sx={{ ml:4, mr:4, mt:6 }}>
    <IndPaper square={false} elevation={10}>
        <Typography fontWeight="bold" variant="h6">Utility Cost Breakdown</Typography>
        <PieChart
        // colors={palette}
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
            data: colorPalette,
            },
        ]}
        width={400}
        height={400}
        />
    </IndPaper>
  </Stack>
  );
}
