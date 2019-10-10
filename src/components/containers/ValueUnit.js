import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const units = [
    {
      value: 'K',
      label: 'Thousand',
    },
    {
      value: 'L',
      label: 'Lakh',
    },
    {
      value: 'C',
      label: 'Crore',
    }
  ];
  
const ValueUnit = () => {
    const [values, setValues] = React.useState({
        unit: 'K',
      });
    
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
    return (
        <TextField
            id="standard-select-currency"
            select
            label="Value Unit"
            value={values.unit}
            onChange={handleChange('unit')}
            margin="normal"
        >
            {units.map(option => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
        </TextField>
    )  
}

export default ValueUnit;