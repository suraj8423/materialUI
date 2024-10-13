import {useState} from 'react';
import { TextField,MenuItem,Box,Stack } from '@mui/material';

const MuiSelect = () => {
    const [country,setCountry] = useState('');

    const handleChange = (_event : React.ChangeEvent<HTMLInputElement>) => {
             setCountry(_event?.target.value as string)
    }
    return (
      <Box width='250px'>
        <TextField label='Select Country' select value={country} onChange={handleChange} fullWidth>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    )
}

// We can select multiple options also this is also present in the video only

export default MuiSelect;