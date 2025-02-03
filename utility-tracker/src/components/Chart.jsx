// Chart.jsx
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Button, ButtonGroup, Box, Select, MenuItem, InputLabel, FormControl, Checkbox, ListItemText } from "@mui/material";
import { addLabels, fakeData } from "./data";

export default function Chart() {
  const [selectedQuarters, setSelectedQuarters] = React.useState([1, 2, 3, 4]);
  const [selectedDataKeys, setSelectedDataKeys] = React.useState([
    "Alectra",
    "Bhydro",
    "Enbridge",
    "Reliance",
  ]);

  const dataKeys = ["Alectra", "Bhydro", "Enbridge", "Reliance"];

  // Define months corresponding to each quarter
  const quarterMonths = {
    1: ["Jan", "Feb", "Mar"],
    2: ["Apr", "May", "Jun"],
    3: ["Jul", "Aug", "Sep"],
    4: ["Oct", "Nov", "Dec"],
  };

  // Filter data based on selected quarters
  const filteredData = fakeData.filter((entry) =>
    selectedQuarters.some((q) => quarterMonths[q].includes(entry.month))
  );

  // Toggle quarter selection
  const toggleQuarter = (quarter) => {
    setSelectedQuarters((prev) =>
      prev.includes(quarter)
        ? prev.filter((q) => q !== quarter)
        : [...prev, quarter].sort()
    );
  };

  // Handle data key selection from dropdown
  const handleDataKeyChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedDataKeys(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Quarter Toggle Buttons */}
      <ButtonGroup variant="contained" color="primary" sx={{ mb: 2 }}>
        {[1, 2, 3, 4].map((q) => (
          <Button
            key={q}
            onClick={() => toggleQuarter(q)}
            variant={selectedQuarters.includes(q) ? "contained" : "outlined"}
          >
            Q{q}
          </Button>
        ))}
      </ButtonGroup>

      &nbsp;

      {/* DataKey Dropdown */}
      <FormControl sx={{ minWidth: 100, ml: 2 }} size="small">
        <InputLabel id="dataKey-select-label">Data keys</InputLabel>
        <Select
          labelId="dataKey-select-label"
          multiple
          value={selectedDataKeys}
          onChange={handleDataKeyChange}
        //   renderValue={(selected) => selected.join(", ")}
          renderValue={() => ""}
        >
          {dataKeys.map((key) => (
            <MenuItem key={key} value={key}>
              <Checkbox checked={selectedDataKeys.includes(key)} />
              <ListItemText primary={key} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Chart */}
      <BarChart
        dataset={filteredData}
        series={addLabels(
          selectedDataKeys.map((key) => ({ dataKey: key, stack: "liability" }))
        )}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        slotProps={{
          legend: {
            position: { vertical: "bottom", horizontal: "middle" },
            itemMarkWidth: 10,
            itemMarkHeight: 5,
            itemGap: 4,
          },
        }}
        // width={400}
        height={400}
        margin={{ top: 30, bottom: 60 }}
        barLabel="value"
      />
    </Box>
  );
}
