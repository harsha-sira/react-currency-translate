import React from "react";
import {
  Typography,
  Grid,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel
} from "@material-ui/core";

function Details() {
  const [value, setValue] = React.useState("e-mail");

  const handleChange = event => {
    setValue(event.target.value);
    if (event.target.value === "sms") {
      console.log();
    } else {
      console.log("email");
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6" component="h6" gutterBottom>
        Enter Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField required id="firstName" label="First Name" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="LastName" label="Last Name" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RadioGroup
            aria-label="Notification Type"
            name="type"
            value={value}
            onChange={handleChange}
            color="default"
            row
          >
            <FormControlLabel
              value="e-mail"
              control={<Radio />}
              label="E-mail"
            />
            <FormControlLabel value="sms" control={<Radio />} label="SMS" disabled />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField id="email" label="E-mail" fullWidth required />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField id="phone" label="Phone number" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Details;
