import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export class Payment extends Component {
  render() {
    const { values } = this.props;

    return (
      <div>
        {values.isfree ? (
          <div>
            <Typography variant="h3">
              No payment needed. <br/>This service is <strong className="highlight">totally free</strong>{" "}
              for you.
            </Typography>
          </div>
        ) : (
          <div>
            <Typography variant="h4" className="highlight">
            Payment service implemention is under developing ...
            </Typography>
          </div>
        )}
      </div>
    );
  }
}

export default Payment;
