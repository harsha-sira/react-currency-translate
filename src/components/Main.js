import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Link, Paper } from "@material-ui/core";
import { Button, Stepper, Step, StepLabel } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    appbar: {
      align: "center"
    },
    backButton: {
      marginLeft: theme.spacing(1)
    },
    buttons: {
      display: "flex",
      justifyContent: "flex-end"
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(2)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    paperStyle: {
      marginTop: "20px",
      marginBottom: "30px",
      width: "auto"
    }
  })
);

function getSteps() {
  return ["Add details", "Terms and Condition", "Payments"];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        awesome-projects
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Main() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="h3" align="center">
              Currency Alert App - GBP to LKR
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
      <Paper className={classes.paperStyle}>
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
              <Typography className={classes.instructions}>
                You are sucessfully Subscribeed !
              </Typography>
              <Button
                onClick={handleReset}
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Donate
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div className={classes.buttons}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Subscribe" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
        <br />
      </Paper>

      {/* adding copyright */}
      <Copyright />
    </div>
  );
}

export default Main;
