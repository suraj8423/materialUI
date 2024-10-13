import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skills = {
  id: number;
  label: string;
};
const skills = ["HTML", "javascript", "CSS", "React", "Typescript", "java"];

const skillOptions = skills.map((skill, index) => {
  return {
    id: index + 1,
    label: skill,
  };
});

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [Skill, setSkills] = useState<Skills | null>(null);
  console.log(Skill);
  const handleChange = (_event: any, newValue: string | null) => {
    setValue(newValue);
    //console.log({ "+++++": _event });
  };
  const handleSkillsChange = (_event: any, newValue: Skills | null) => {
    setSkills(newValue);
    //console.log({ "+++++": _event });
  };
  return (
    <Stack spacing={8} direction="row" width="250px">
      <Autocomplete
        options={skills}
        value={value}
        onChange={handleChange}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />

      <Autocomplete
        options={skillOptions}
        value={Skill}
        onChange={handleSkillsChange}
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />
    </Stack>
  );
};

// After using the prop freeSolo you can type anything

export default MuiAutocomplete;
