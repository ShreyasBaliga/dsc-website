import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import style from "./css/eventpage.module.css";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Register from "../components/registration";
import Modal from "@material-ui/core/Modal";
import SendMessage from "../components/send-message";
import Fab from "@material-ui/core/Fab";
import firebase from "../pages/firebase";

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open1: false,
      open2: false,
      isLoggedIn: false
    };
    this.sendMessaegButton = this.sendMessaegButton.bind(this);
    this.downoadLetterButton = this.downoadLetterButton.bind(this);
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          this.setState({
            isLoggedIn: true
          });
        }
      }.bind(this)
    );
  }

  getLinkButton() {
    let eventDate = moment(
      this.props.data.markdownRemark.frontmatter.date,
      "DD-MMM-YYYY"
    );
    let week = moment(
      this.props.data.markdownRemark.frontmatter.date,
      "DD-MMM-YYYY"
    ).add("7", "days");

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (today < eventDate._d && !this.state.isLoggedIn) {
      return (
        <div align="center" style={{ margin: "20px" }}>
          <div>
            <Fab
              style={{ backgroundColor: "rgb(6, 28, 75)" }}
              variant="extended"
              size="large"
              color="primary"
              aria-label="add"
              onClick={function() {
                this.setState({
                  open1: true
                });
              }.bind(this)}
            >
              Register
            </Fab>
            <Modal
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open1}
              onClose={function() {
                this.setState({
                  open1: false
                });
              }.bind(this)}
            >
              <div
                style={{
                  position: "absolute",
                  width: 500,
                  backgroundColor: "white",
                  border: "2px solid #000",
                  boxShadow: 5,
                  padding: "10px 10px 50px 10px"
                }}
              >
                <Register
                  eventName={this.props.data.markdownRemark.frontmatter.name}
                  closeModalFunction={function() {
                    this.setState({
                      open1: false
                    });
                  }.bind(this)}
                  date={this.props.data.markdownRemark.frontmatter.date}
                  location={this.props.data.markdownRemark.frontmatter.location}
                />
              </div>
            </Modal>
          </div>
        </div>
      );
    }
  }

  sendMessaegButton() {
    if (this.state.isLoggedIn)
      return (
        <div>
          <Fab
            style={{
              backgroundColor: "rgb(6, 28, 75)",
              marginTop: "-5px"
            }}
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            onClick={function() {
              this.setState({
                open2: true
              });
            }.bind(this)}
          >
            Send Message
          </Fab>
          <Modal
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open2}
            onClose={function() {
              this.setState({
                open2: false
              });
            }.bind(this)}
          >
            <div
              style={{
                position: "absolute",
                width: 500,
                backgroundColor: "white",
                border: "2px solid #000",
                boxShadow: 5,
                padding: "10px 10px 10px 10px"
              }}
            >
              <SendMessage
                eventName={this.props.data.markdownRemark.frontmatter.name}
                closeModalFunction={function() {
                  this.setState({
                    open2: false
                  });
                }.bind(this)}
              />
            </div>
          </Modal>
        </div>
      );
  }

  downoadLetterButton() {
    var link =
      "http://api.html2pdfrocket.com/pdf?value=https://us-central1-cloud-messaging-b6180.cloudfunctions.net/generateAttendance?event=" +
      this.props.data.markdownRemark.frontmatter.name +
      "&date=" +
      this.props.data.markdownRemark.frontmatter.date +
      "&apikey=c4134911-32a6-43a8-91ef-8e85d07e6fb2";
    if (this.state.isLoggedIn)
      return (
        <a href={link}>
          <Fab
            style={{
              backgroundColor: "rgb(6, 28, 75)",
              marginTop: "-5px"
            }}
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
          >
            Download Letter
          </Fab>
        </a>
      );
  }

  render() {
    return (
      <Layout>
        <div className={style.pageholder}>
          <div className={style.container}>
            <div className={style.page}>
              <Img
                className={style.cover_image}
                alt="Cover image"
                fluid={
                  this.props.data.markdownRemark.frontmatter.cover
                    .childImageSharp.fluid
                }
              />
              <div className={style.eventinfo}>
                <span className={style.date}>
                  {this.props.data.markdownRemark.frontmatter.date}
                </span>
                <span className={style.date}>
                  {this.props.data.markdownRemark.frontmatter.location}
                </span>
                <span>{this.sendMessaegButton()}</span>
                <span>{this.downoadLetterButton()}</span>
              </div>
              <div
                className={style.eventcontent}
                dangerouslySetInnerHTML={{
                  __html: this.props.data.markdownRemark.html
                }}
              />
            </div>
            {this.getLinkButton()}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Template;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        slug
        name
        location
        date(formatString: "DD-MMM-YYYY")
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
