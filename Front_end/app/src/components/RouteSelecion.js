import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RouteSelecion() {
  const [route, setRoute] = React.useState('');

  const handleChange = (event) => {
    setRoute(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Route</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={route}
          label="Age"
          onChange={handleChange}
          required
        >
          <MenuItem value={10}>Colombo</MenuItem>
          <MenuItem value={20}>Kurunegala</MenuItem>
          <MenuItem value={30}>Moratuwa</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
