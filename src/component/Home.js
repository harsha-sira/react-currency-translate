import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import { Button, Stepper, Step, StepLabel } from "@material-ui/core";
import Copyright from "./Copyright";
import "../css/Main.css";
import Detail from "./Detail";
import Terms from "./Terms";

export class Home extends Component {
  state = {
    activeStep: 0,
    firstname: "",
    lastname: "",
    bank: "",
    type: "e-mail",
    email: "",
    phone: "",
    termsAgreed: false
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleDonate = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  handleCheckboxChange = input => e => {
    this.setState({
      [input]: e.target.checked
    });
  };

  getSteps = () => {
    return ["Add details", "Terms and Condition", "Payments"];
  };

  getStepContent = (stepIndex, values, handleChange, handleCheckboxChange) => {
    switch (stepIndex) {
      case 0:
        return <Detail handleChange={handleChange} values={values} />;
      case 1:
        return <Terms handleCheckboxChange={handleCheckboxChange} values={values} />;
      // case 2:
      //   return <Payment/>;
      default:
        return "Unknown stepIndex";
    }
  };

  render() {
    const {
      activeStep,
      firstname,
      lastname,
      bank,
      type,
      email,
      phone,
      termsAgreed
    } = this.state;

    const values = {
      activeStep,
      firstname,
      lastname,
      bank,
      type,
      email,
      phone,
      termsAgreed
    };
    const steps = this.getSteps();

    return (
      <div>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar className="toolbar">
              <Typography variant="h6" component="h3" align="center">
                Currency Alert App - GBP to LKR
              </Typography>
            </Toolbar>
          </AppBar>
        </React.Fragment>

        <main className="layout">
          <Paper className="paperStyle">
            <Typography variant="h4" component="h3" align="center">
              Subscribe to alert
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className="instructions">
                    You are sucessfully Subscribeed !
                  </Typography>
                  <Button
                    onClick={this.handleDonate}
                    variant="contained"
                    color="secondary"
                    className="button"
                  >
                    Donate
                  </Button>
                </div>
              ) : (
                <div>
                  <Typography className="instructions">
                    {this.getStepContent(activeStep, values, this.handleChange, this.handleCheckboxChange)}
                  </Typography>
                  <br />
                  <div className="buttons">
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className="button"
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className="button"
                    >
                      {activeStep === steps.length - 1 ? "Subscribe" : "Next"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <br />
          </Paper>
        </main>

        {/* adding copyright */}
        <Copyright />
      </div>
    );
  }
}

export default Home;
