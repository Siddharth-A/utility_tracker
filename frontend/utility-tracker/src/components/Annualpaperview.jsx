import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid2, Typography } from "@mui/material";

import { fetchUtilityData, fakeData } from "./data";

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
  // alignItems: "center",
  fontFamily: "monospace",
}));

// {{ top: 30, bottom: 60, left:15, right:15 }}
export default function Annualpaperview() {
  const [utilityData, setUtilityData] = useState([]);
  const currentYear = new Date().getFullYear();
  const lastYear = currentYear - 1;
  
  const dataKey = ["Alectra", "Bhydro", "Enbridge", "Reliance"];

  // Load data from API
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchUtilityData();
      setUtilityData(data);
    }
    loadData();
  }, []);

  const calculateYearlyTotal = (year) => {
    return utilityData
      .filter((entry) => entry.year === year)
      .reduce((total, entry) => {
        return total + dataKey.reduce((sum, key) => sum + (entry[key] || 0), 0);
      }, 0);
  };

  const currentYearTotal = calculateYearlyTotal(currentYear);
  const lastYearTotal = calculateYearlyTotal(lastYear);

  const currencyFormat = (value) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <Box>
      <Stack direction="row" spacing={2} sx={{ ml: 4, mr: 4, mt: 2 }}>
        <IndPaper square={false} elevation={20}>
          <Typography fontFamily="monospace" variant="h5" fontWeight={"bold"}>
          {currencyFormat(currentYearTotal)}
          </Typography>
          <Typography variant="body1">{currentYear} Total</Typography>
        </IndPaper>
        <IndPaper square={false} elevation={20}>
          <Typography fontFamily="monospace" variant="h5" fontWeight={"bold"}>
            {currencyFormat(lastYearTotal)}
          </Typography>
          <Typography variant="body1">{lastYear} Total</Typography>
        </IndPaper>
      </Stack>

    </Box>
  );
}
