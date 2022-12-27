import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function PaymentMethod() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Payment Method</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="Visa Card" 
      >
        <FormControlLabel value="Visa Card" control={<Radio />} label="Visa Card" />
        <FormControlLabel value="Master Card" control={<Radio />} label="Master Card" />
        <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
      </RadioGroup>
    </FormControl>
  );
}
