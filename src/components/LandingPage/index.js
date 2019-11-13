import React from "react";
import style from "./style.module.css";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const LandingPage = ({ props }) => (
  <StaticQuery
    query={graphql`
      fragment LandingSiteImages on File {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      query {
        imageFirst: file(relativePath: { eq: "images/hero2.png" }) {
          ...LandingSiteImages
        }
        imageSecond: file(relativePath: { eq: "images/hero1.png" }) {
          ...LandingSiteImages
        }
        imageThird: file(relativePath: { eq: "images/logo2.png" }) {
          ...LandingSiteImages
        }
      }
    `}
    render={data => (
      <div>
        <div className={style.container}>
          <div className={style.content}>
            {/* <div className={style.image2}>
        <Img
            fluid={data.imageThird.childImageSharp.fluid}
            className={style.hero1}
          />
        </div> */}
            <p className={style.title}>Developer Students Club</p>

            <p className={style.sahyadri}>Sahyadri</p>

            <p className={style.Landingpagecontent}>
              Developer Student Clubs (DSC) is a Google Developers program for
              university students to learn mobile and web development skills.
            </p>
            <div className={style.landingfooter}>
              <button className={style.herobutton}>Learn More</button>
            </div>
          </div>
          <div className={style.solid}>
            <Img
              fluid={data.imageSecond.childImageSharp.fluid}
              className={style.hero1}
            />
            <Img
              fluid={data.imageFirst.childImageSharp.fluid}
              className={style.hero2}
            />
          </div>
        </div>
      </div>
    )}
  />
);

export default LandingPage;
