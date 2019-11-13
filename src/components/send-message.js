import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import firebase from "../pages/firebase";

class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.message !== "") {
      console.log(this.props.eventName);
      console.log(this.state.message);
      var sendMail = firebase
        .functions()
        .httpsCallable("sendMessageToAllAttendees");
      sendMail({
        event: this.props.eventName,
        message: this.state.message
      });
      this.props.closeModalFunction();
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
            Send Message
          </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Message"
            autoFocus
            value={this.state.message}
            onChange={function(e) {
              this.setState({
                message: e.target.value
              });
            }.bind(this)}
          />
          <Button
            style={{ backgroundColor: "rgb(6, 28, 75)" }}
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            Send
          </Button>
        </div>
      </Container>
    );
  }
}
export default SendMessage;
