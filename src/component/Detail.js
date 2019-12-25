import React, { Component } from "react";
import {
  Typography,
  Grid,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";

export class Detail extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <React.Fragment>
          <Typography variant="h6" component="h6" gutterBottom>
            Enter Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                value={values.firstname}
                label="First Name"
                fullWidth
                onChange={handleChange("firstname")}
              
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="LastName"
                value={values.lastname}
                label="Last Name"
                fullWidth
                onChange={handleChange("lastname")}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <InputLabel id="demo-simple-select-label">Bank</InputLabel>
              <Select
                labelId="Banks"
                id="bank-combo"
                value={values.bank}
                onChange={handleChange("bank")}
                fullWidth
              >
                <MenuItem value="BOC">BOC</MenuItem>
                <MenuItem value="SAMPATH">SAMPATH</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioGroup
                aria-label="Notification Type"
                name="type"
                value={values.type}
                onChange={handleChange("type")}
                color="default"
                row
              >
                <FormControlLabel
                  value="e-mail"
                  control={<Radio />}
                  label="E-mail"
                />
                <FormControlLabel
                  value="sms"
                  control={<Radio />}
                  label="SMS"
                  // disabled
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="email"
                label="E-mail"
                value={values.email}
                fullWidth
                onChange={handleChange("email")}
                required={values.type === "e-mail"}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="phone"
                label="Phone number"
                value={values.phone}
                fullWidth
                onChange={handleChange("phone")}
                required={values.type === "sms"}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    );
  }
}

export default Detail;
