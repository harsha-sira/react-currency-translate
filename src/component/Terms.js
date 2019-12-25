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

    return (
      <div>
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
            <Grid item xs={12} sm={12}>
              <FormControlLabel
                value="start"
                control={
                  <Checkbox
                    checked={values.termsAgreed}
                    onChange={handleCheckboxChange('termsAgreed')}
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
