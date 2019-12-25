import React, { Component } from "react";
import {
  Typography,
  Checkbox,
  Grid,
  FormControlLabel
} from "@material-ui/core";

export class Terms extends Component {
  render() {
    const { values, handleCheckboxChange } = this.props;
console.log(values)
    return (
      <div>
        <React.Fragment>
          <Typography variant="h6" component="h6" gutterBottom>
            Terms & Conditions
          </Typography>
          <Typography variant="h5" component="h1">
            <ul>
              <li>
                All rates are taken from respective bank's official websites{" "}
              </li>
              <li>
                If those web sites are down for some reason, for that period you
                will not be notified
              </li>
              { values.isfree ? (
                <li>
                  This is a free service and it can be terminated without prior
                  notice
                </li>
              ) : (
                <div>
                  <li>You need to pay subscription once a month</li>
                  <li>
                    You will recieve notification untill your subscription is
                    valid
                  </li>
                  <li>
                    Just in case if service is no longer continued, it will
                    available until your subscription period is over
                  </li>
                </div>
              )}
            </ul>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <FormControlLabel
                value="start"
                control={
                  <Checkbox
                    checked={values.termsAgreed}
                    onChange={handleCheckboxChange("termsAgreed")}
                    value={values.termsAgreed}
                    color="primary"
                    inputProps={{
                      "aria-label": "primary checkbox"
                    }}
                  />
                }
                label="I agree to terms & conditions"
                labelPlacement="end"
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    );
  }
}

export default Terms;
