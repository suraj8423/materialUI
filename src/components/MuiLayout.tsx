import { Box } from "@mui/material";

const MuiLayout = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main", // this is correspond to a color from our predefined theme
        color: "white",
        height: "100px",
        width: "100px",
        padding: "16px",
        "&:hover": {
          backgroundColor: "primary.light", // this is also corresponding to a color from our predefined theme
        },
      }}
    >
      Hello Containers
    </Box>
  );
};

// We already have div or span with us then why to use this Box component, the main reason is Box component accepts a prop called sx which can be used for defining custom style that has access to the theme

export default MuiLayout;
