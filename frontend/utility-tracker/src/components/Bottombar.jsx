import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction'

import StorageIcon from '@mui/icons-material/Storage';
import PieChartIcon from '@mui/icons-material/PieChart';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Bottombar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleNavigation = (newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/dashboard');
        break;
      case 1:
        navigate('/database'); // Placeholder for database route
        break;
      case 2:
        navigate('/settings'); // Placeholder for settings route
        break;
      default:
        navigate('/');
    }
  };

  const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
    color: grey;
    &.Mui-selected {
      color: #00ff99;
    }
  `);

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            handleNavigation(newValue);
          }}
        >
          <BottomNavigationAction label="Dashboard" icon={<PieChartIcon />} />
          <BottomNavigationAction label="Database" icon={<StorageIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
