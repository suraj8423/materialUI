import React from "react";
import {
  Stack,
  Button,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
  const [formats, setformats] = React.useState<string[]>([]);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setformats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={3} direction="row">
        <Button variant="text" href="http://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" disableElevation>
          Primary
        </Button>
        {/* {we can use this prop disableElevation to disable the elevation} */}
        <Button
          variant="contained"
          color="secondary"
          disableRipple
          disableElevation
        >
          Secondary
        </Button>
        {/* This disable ripple will remove the ripple effect on button click */}
        <Button
          variant="contained"
          color="error"
          onClick={() => alert("Clicked")}
        >
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large" disableElevation>
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left button is clicked")}>Left</Button>
          <Button onClick={() => alert("Center button is clicked")}>
            Center
          </Button>
          <Button onClick={() => alert("Right button is clicked")}>
            Right
          </Button>
        </ButtonGroup>
        {/* We use ButtonGroup to group all the buttons */}
        {/* In this code, the aria-label attribute is important for accessibility. It provides a text label for assistive technologies (such as screen readers) to describe the ButtonGroup. The aria-label ensures that users with disabilities can understand the purpose of the grouped buttons even if they can't visually see the interface.

Without an aria-label, a screen reader may not convey what the grouped buttons represent, which could lead to confusion for visually impaired users. In this case, 'alignment button group' helps indicate the purpose of the buttons inside the group, making the interface more accessible. */}
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text-formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
