import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import firebase from "./firebase";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      email_error: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleClick() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function(res) {
        firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(() => (window.location = "/"));
      })
      .catch(function(error) {
        alert("Email or Password wrong.Please try again");
      });
  }
  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  }
  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            marginTop: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar
            style={{
              margin: 1,
              backgroundColor: "rgb(106, 132, 174)"
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <ValidatorForm
            ref="form"
            onSubmit={this.handleClick}
            onError={errors => console.log(errors)}
          >
            <TextValidator
              fullWidth
              autoFocus
              variant="outlined"
              margin="normal"
              label="Email"
              onChange={this.handleEmail}
              name="email"
              value={this.state.email}
              validators={["required", "isEmail"]}
              errorMessages={["This field is required", "Email is not valid"]}
            />
            <TextValidator
              fullWidth
              autoFocus
              variant="outlined"
              margin="normal"
              label="Password"
              onChange={this.handlePassword}
              name="password"
              type="password"
              validators={["required"]}
              errorMessages={["This field is required"]}
              value={this.state.password}
            />
            {/* <TextField
              error={this.state.email_error}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
              value={this.email}
              onChange={this.handleEmail}
              errorText="Invalid Email"
            /> */}
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handlePassword}
            /> */}

            <Button
              type="submit"
              style={{ backgroundColor: "rgb(6, 28, 75)" }}
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </ValidatorForm>
        </div>
      </Container>
    );
  }
}
export default SignIn;
