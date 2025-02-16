import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Grid2, Typography } from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import PropaneTankIcon from "@mui/icons-material/PropaneTank";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

import { fakeData } from "./data";

const IndPaper = styled(Paper)(({ theme }) => ({
  width: 1000,
  height: 100,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  // textAlign: 'center',
  borderRadius: "12px",
  boxShadow: theme.shadows[5],
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // alignItems: "center",
  fontFamily: "monospace",
}));

const TotPaper = styled(Paper)(({ theme }) => ({
  width: 1000,
  height: 100,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  // textAlign: 'center',
  borderRadius: "12px",
  boxShadow: theme.shadows[5],
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
}));

// {{ top: 30, bottom: 60, left:15, right:15 }}
export default function Monthlypaperview() {
  const currentMonthIndex = new Date().getMonth();
  const currentMonth = new Date().toLocaleString("Default", { month: "short" });

  const currentMonthData = fakeData.find((item) => item.month === currentMonth);
  const previousMonthData = fakeData[currentMonthIndex - 1];

  const dataKey = ["Alectra", "Bhydro", "Enbridge", "Reliance"];

  const currencyFormat = (value) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 1,
    });
  const calculateTotal = (data, keys) => {
    return keys.reduce((total, key) => total + (data[key] || 0), 0);
  };
  const totalBill = calculateTotal(currentMonthData, dataKey);
  const previousTotalBill = calculateTotal(previousMonthData, dataKey);

  const momChangePercent = previousTotalBill
    ? Math.round(((totalBill - previousTotalBill) / previousTotalBill) * 100)
    : "N/A";

  return (
    <Box>
      <Stack direction="row" spacing={4} sx={{ ml: 4, mr: 4, mt: 4 }}>
        <TotPaper square={false} elevation={20}>
          <Grid2 container direction="column" sx={{ mt: 4, mb: 4 }}>
            <Grid2 container direction="row">
              <Grid2 item size={5}>
                <Typography variant="body1">
                  {currentMonth}'s total bill:
                </Typography>
              </Grid2>
              <Grid2 item size={2}></Grid2>
              <Grid2 item size={5}>
                <Typography variant="body1">MoM change %:</Typography>
              </Grid2>
            </Grid2>

            <Grid2 container direction="row">
              <Grid2 item size={5}>
                <Typography
                  fontFamily="monospace"
                  variant="h4"
                  fontWeight="bold"
                >
                  {currencyFormat(totalBill)}
                </Typography>
              </Grid2>
              <Grid2 item size={2}></Grid2>
              <Grid2 item size={5}>
                <Typography
                  fontFamily="monospace"
                  variant="h4"
                  fontWeight="bold"
                  color={
                    momChangePercent !== "N/A" && momChangePercent < 0
                      ? "#00ff99"
                      : "#ff0062"
                  }
                >
                  {momChangePercent}%
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </TotPaper>
      </Stack>

      <Stack direction="row" spacing={2} sx={{ ml: 4, mr: 4, mt: 2 }}>
        <IndPaper square={false} elevation={20}>
          <ElectricalServicesIcon color="Alectra" />
          <Typography fontFamily="monospace" variant="h5" fontWeight={"bold"}>
            {currencyFormat(currentMonthData[dataKey[0]])}
          </Typography>
          <Typography variant="body1">{dataKey[0]}</Typography>
        </IndPaper>
        <IndPaper square={false} elevation={20}>
          <WaterDropIcon color="Bhydro" />
          <Typography fontFamily="monospace" variant="h5" fontWeight={"bold"}>
            {currencyFormat(currentMonthData[dataKey[1]])}
          </Typography>
          <Typography variant="body1">{dataKey[1]}</Typography>
        </IndPaper>
      </Stack>

      <Stack direction="row" spacing={2} sx={{ ml: 4, mr: 4, mt: 2 }}>
        <IndPaper square={false} elevation={20}>
          <LocalFireDepartmentIcon color="Enbridge" />
          <Typography fontFamily="monospace" variant="h5" fontWeight={"bold"}>
            {currencyFormat(currentMonthData[dataKey[2]])}
          </Typography>
          <Typography variant="body1">{dataKey[2]}</Typography>
        </IndPaper>
        <IndPaper square={false} elevation={20}>
          <PropaneTankIcon color="Reliance" />
          <Typography fontFamily="monospace" variant="h5" fontWeight={"bold"}>
            {currencyFormat(currentMonthData[dataKey[3]])}
          </Typography>
          <Typography variant="body1">{dataKey[3]}</Typography>
        </IndPaper>
      </Stack>
    </Box>
  );
}
