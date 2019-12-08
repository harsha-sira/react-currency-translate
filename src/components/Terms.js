import React from "react";
import { Typography, Checkbox, Grid } from "@material-ui/core";

function Terms() {
  const [state, setState] = React.useState({
    checked: true
  });

  const handleChange = event => {
    //set state
  };

  return (
    <React.Fragment>
      <Typography variant="h6" component="h6" gutterBottom>
        Terms & Conditions
      </Typography>
      <Typography variant="h5" component="h1">
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={2} sm={2}>
          <Checkbox
            checked={state.checked}
            onChange={handleChange()}
            value="checked"
            color="primary"
            inputProps={{
              "aria-label": "primary checkbox"
            }}
          />
        </Grid>
        <Grid item xs={10} sm={10}>
          <Typography variant="h6" component="h6" gutterBottom>
            I agree
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Terms;
