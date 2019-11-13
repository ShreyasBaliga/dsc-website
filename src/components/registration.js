import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import firebase from "../pages/firebase";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: props.eventName,
      email: "",
      name: "",
      usn: "",
      year: 1,
      branch: "CSE",
      sex: "M",
      attended: false
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const db = firebase.firestore();
    if (
      this.state.email !== "" &&
      this.state.name !== "" &&
      this.state.usn !== ""
    ) {
      db.collection(this.state.event)
        .doc(this.state.usn)
        .set({
          email: this.state.email,
          name: this.state.name,
          usn: this.state.usn,
          year: this.state.year,
          branch: this.state.branch,
          sex: this.state.sex,
          attended: this.state.attended
        })
        .then(
          function() {
            var sendMail = firebase.functions().httpsCallable("sendMail");
            sendMail({
              email: this.state.email,
              event: this.props.eventName,
              date: this.props.date,
              location: this.props.location,
              usn: this.state.usn
            });
            this.props.closeModalFunction();
          }.bind(this)
        );
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="xs" style={{ marginTop: 20 }}>
        <CssBaseline />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography component="h1" variant="h5">
            Registration
          </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoFocus
            value={this.email}
            onChange={function(e) {
              this.setState({
                email: e.target.value
              });
            }.bind(this)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name"
            value={this.state.name}
            onChange={function(e) {
              this.setState({
                name: e.target.value
              });
            }.bind(this)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="USN"
            value={this.state.usn}
            onChange={function(e) {
              this.setState({
                usn: e.target.value
              });
            }.bind(this)}
          />

          <FormControl
            fullWidth
            variant="outlined"
            style={{
              margin: 20,
              minWidth: 120
            }}
          >
            <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.state.year}
              onChange={function(e) {
                this.setState({
                  year: e.target.value
                });
              }.bind(this)}
            >
              <MenuItem value={1}>First</MenuItem>
              <MenuItem value={2}>Second</MenuItem>
              <MenuItem value={3}>Third</MenuItem>
              <MenuItem value={4}>Fourth</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            variant="outlined"
            style={{
              margin: 20,
              minWidth: 120
            }}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Branch
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              lable="Branch"
              value={this.state.branch}
              onChange={function(e) {
                this.setState({
                  branch: e.target.value
                });
              }.bind(this)}
            >
              <MenuItem value={"CSE"}>CSE</MenuItem>
              <MenuItem value={"ISE"}>ISE</MenuItem>
              <MenuItem value={"ECE"}>ECE</MenuItem>
              <MenuItem value={"ME"}>ME</MenuItem>
              <MenuItem value={"CV"}>CV</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            variant="outlined"
            style={{
              margin: 20,
              minWidth: 120
            }}
          >
            <InputLabel id="demo-simple-select-outlined-label">Sex</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.state.sex}
              onChange={function(e) {
                this.setState({
                  sex: e.target.value
                });
              }.bind(this)}
            >
              <MenuItem value={"M"}>Male</MenuItem>
              <MenuItem value={"F"}>Female</MenuItem>
            </Select>
          </FormControl>
          <Button
            style={{ backgroundColor: "rgb(6, 28, 75)" }}
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            Register
          </Button>
        </div>
      </Container>
    );
  }
}
export default Register;
