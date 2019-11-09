import React from "react";
import style from "./Style.module.css";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";

import firebase from "../../pages/firebase";

const Logo = function() {
  return (
    <StaticQuery
      query={graphql`
        fragment firstSiteImages on File {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        query {
          imageFirst: file(relativePath: { eq: "images/dsc-logo2.png" }) {
            ...firstSiteImages
          }
        }
      `}
      render={data => (
        <div className={style.image}>
          <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.dsc_logo}
          />
        </div>
      )}
    />
  );
};
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
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
  handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(
        this.setState({
          isLoggedIn: false
        })
      );
  }
  render() {
    if (this.state.isLoggedIn) {
      return (
        <header>
          <>
            <div className={style.Menu}>
              <div className={style.titlewrap}>
                <Logo />
                <p className={style.title}>DSCS</p>
              </div>
              <div className={style.list}>
                <ul className={style.ullist}>
                  <div>
                    <Link
                      className={style.links}
                      activeClassName={style.activelink}
                      to="/"
                    >
                      Home
                    </Link>
                  </div>
                  <div>
                    {" "}
                    <Link
                      className={style.links}
                      activeClassName={style.activelink}
                      to="/events"
                    >
                      Events
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={style.links}
                      activeClassName={style.activelink}
                      to="/team/"
                    >
                      Team
                    </Link>
                  </div>
                  <div className={style.button_div}>
                    <Link
                      className={style.herobutton}
                      activeClassName={style.activelink}
                      onClick={this.handleLogout}
                      to="/"
                    >
                      LogOut
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </>
        </header>
      );
    }
    return (
      <header>
        <>
          <div className={style.Menu}>
            <div className={style.titlewrap}>
              <Logo />
              <p className={style.title}>DSCS</p>
            </div>
            <div className={style.list}>
              <ul className={style.ullist}>
                <div>
                  <Link
                    className={style.links}
                    activeClassName={style.activelink}
                    to="/"
                  >
                    Home
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link
                    className={style.links}
                    activeClassName={style.activelink}
                    to="/events"
                  >
                    Events
                  </Link>
                </div>
                <div>
                  <Link
                    className={style.links}
                    activeClassName={style.activelink}
                    to="/team/"
                  >
                    Team
                  </Link>
                </div>
                <div className={style.button_div}>
                  <Link
                    className={style.herobutton}
                    activeClassName={style.activelink}
                    to="/login/"
                  >
                    LogIn
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </>
      </header>
    );
  }
}

export default Header;
