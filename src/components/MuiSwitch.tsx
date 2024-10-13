import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
  const [mode, setMode] = useState(false);
  console.log(mode);
  const handleModeChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(_event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={mode} onChange={handleModeChange} />}
      />
    </Box>
  );
};

// all things are same as checkbox only if needed we can use FormController etc to create group of switches

export default MuiSwitch;
