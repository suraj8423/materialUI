import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 headingf</Typography>
      <Typography variant="h2">h2 headingf</Typography>
      <Typography variant="h3">h3 headingf</Typography>
      <Typography variant="h4">h4 headingf</Typography>
      <Typography variant="h5">h5 headingf</Typography>
      <Typography variant="h6" gutterBottom>h6 headingf</Typography> {/* if you will use gutterBottom it will automatically add a marginbottom*/}
      <Typography variant="subtitle1">subtitle 1</Typography>{" "}
      {/* subtitle 1 and subtitle 2 is variant of h6 only*/}
      <Typography variant="subtitle2">subtitle 2</Typography>
      <Typography variant="body1"> 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque modi
        magni voluptas eum facere non, perspiciatis, vitae possimus aliquid esse
        earum voluptatum accusantium accusamus velit ipsum obcaecati doloribus
        sunt rem.
      </Typography>
      <Typography variant="body2"> {/* body is like paragraph in material ui*/}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque modi
        magni voluptas eum facere non, perspiciatis, vitae possimus aliquid esse
        earum voluptatum accusantium accusamus velit ipsum obcaecati doloribus
        sunt rem.
      </Typography>
    </div>
  );
};

export default MuiTypography;
