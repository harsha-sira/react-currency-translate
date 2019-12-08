import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Link, Paper } from "@material-ui/core";
import { Button, Stepper, Step, StepLabel } from "@material-ui/core";
import Details from "./Details";
import Terms from "./Terms";
import Payment from "./Payment";

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
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3)
      }
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: "auto",
        marginRight: "auto"
      }
    }
  })
);

function getSteps() {
  return ["Add details", "Terms and Condition", "Payments"];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return <Details />;
    case 1:
      return <Terms/>;
    case 2:
      return <Payment/>;
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

  const handleDonate = () => {
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
      <main className={classes.layout}>
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
                  onClick={handleDonate}
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
      </main>

      {/* adding copyright */}
      <Copyright />
    </div>
  );
}

export default Main;
