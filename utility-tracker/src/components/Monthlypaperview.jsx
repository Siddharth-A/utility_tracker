import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { fakeData } from "./data";
import { Grid2, Typography } from "@mui/material";

const IndPaper = styled(Paper)(({ theme }) => ({
  width: 1000,
  height: 80,
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
  // alignItems: "left",
}));

// {{ top: 30, bottom: 60, left:15, right:15 }}
export default function Monthlypaperview() {
  const currentMonth = new Date().toLocaleString("Default", { month: "short" });

  const currentMonthData = fakeData.find((item) => item.month === currentMonth);
  const dataKey = ["Alectra", "Bhydro", "Enbridge", "Reliance"];

  const currencyFormat = (value) =>
    value.toLocaleString("en-US", { style: "currency", currency: "USD" });
  const calculateTotal = (data, keys) => {
    return keys.reduce((total, key) => total + (data[key] || 0), 0);
  };
  const totalBill = calculateTotal(currentMonthData, dataKey);

  return (
    <Box>
      <Stack direction="row" spacing={4} sx={{ margin: 4 }}>
        <TotPaper square={false} elevation={20}>
          {/* <Typography variant="h6" fontWeight={"bold"}>
            Total utility cost for {currentMonth}: {currencyFormat(totalBill)}
          </Typography> */}
          <Grid2 container spacing={2} direction="column" sx={{ mt: 1, mb: 2 }}>
            <Grid2 item xs={12}>
              <Typography variant="body1">{currentMonth}'s total bill:</Typography>
            </Grid2>
            <Grid2 item xs={12}>
              <Typography variant="h4" fontWeight="bold">{currencyFormat(totalBill)}</Typography>
            </Grid2>
            {/* <Grid2 item xs={12}>
              <Typography variant="body1" fontWeight="bold">Grid2 Row 3</Typography>
            </Grid2> */}
          </Grid2>
        </TotPaper>
      </Stack>

      <Stack direction="row" spacing={4} sx={{ margin: 4 }}>
        <IndPaper square={false} elevation={20}>
          <Typography variant="body1" fontWeight={"bold"}>
            {dataKey[0]}
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            {currencyFormat(currentMonthData[dataKey[0]])}
          </Typography>
        </IndPaper>
        <IndPaper square={false} elevation={20}>
          <Typography variant="body1" fontWeight={"bold"}>
            {dataKey[1]}
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            {currencyFormat(currentMonthData[dataKey[1]])}
          </Typography>
        </IndPaper>
      </Stack>

      <Stack direction="row" spacing={4} sx={{ margin: 4 }}>
        <IndPaper square={false} elevation={20}>
          <Typography variant="body1" fontWeight={"bold"}>
            {dataKey[2]}
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            {currencyFormat(currentMonthData[dataKey[2]])}
          </Typography>
        </IndPaper>
        <IndPaper square={false} elevation={20}>
          <Typography variant="body1" fontWeight={"bold"}>
            {dataKey[3]}
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            {currencyFormat(currentMonthData[dataKey[3]])}
          </Typography>
        </IndPaper>
      </Stack>
    </Box>
  );
}
