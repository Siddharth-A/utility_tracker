// import * as React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";
// import { addLabels, fakeData } from "./data";

// export default function Chart() {
//   return (
//     <BarChart
//       dataset={fakeData}
//         // layout="horizontal"
//       series={addLabels([
//         { dataKey: "Alectra", stack: "liability" },
//         { dataKey: "Bhydro", stack: "liability" },
//         { dataKey: "Enbridge", stack: "liability" },
//         { dataKey: "Reliance", stack: "liability" },
//       ])}
//       xAxis={[{ scaleType: "band", dataKey: "month" }]}
//       slotProps={{ legend: { position: { vertical: "bottom", horizontal:"middle" }, itemMarkWidth:10, itemMarkHeight:5, itemGap:4 } }}
//       width={420}
//       height={400}
//       margin={{ top: 30, bottom: 60 }}
//       barLabel="value"
//     />
//   );
// }
// Chart.jsx
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Button, ButtonGroup, Box } from "@mui/material";
import { addLabels, fakeData } from "./data";

export default function Chart() {
  const [selectedQuarters, setSelectedQuarters] = React.useState([1, 2, 3, 4]);

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

      {/* Chart */}
      <BarChart
        dataset={filteredData}
        series={addLabels([
          { dataKey: "Alectra", stack: "liability" },
          { dataKey: "Bhydro", stack: "liability" },
          { dataKey: "Enbridge", stack: "liability" },
          { dataKey: "Reliance", stack: "liability" },
        ])}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        slotProps={{
          legend: {
            position: { vertical: "bottom", horizontal: "middle" },
            itemMarkWidth: 10,
            itemMarkHeight: 5,
            itemGap: 4,
          },
        }}
        width={420}
        height={400}
        margin={{ top: 30, bottom: 60 }}
        barLabel="value"
      />
    </Box>
  );
}
