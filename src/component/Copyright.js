import React, { Component } from "react";
import { Typography, Link } from "@material-ui/core";

export default class Copyright extends Component {
  render() {
    return (
      <div>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://material-ui.com/">
            awesome-projects
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </div>
    );
  }
}
