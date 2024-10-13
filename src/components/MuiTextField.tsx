import { InputAdornment, Stack, TextField } from "@mui/material";
import {useState} from 'react';

const MuiTextField = () => {

    const [value,setValue] = useState('')
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Small Secondary" size="small" color="secondary"  disabled />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Form Input" required />
        <TextField
          label="Password"
          type="password"
          required
          value={value}
          onChange={(e)=>{setValue(e.target.value)}}
          error={!value}
          helperText = {!value ? "Required" : "Do not share your password with anyone"}
        />
        <TextField
          label="Read only"
          slotProps={{ input: { readOnly: true } }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
        />

        <TextField
          label="Weight"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">kg</InputAdornment>
              ),
            },
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
