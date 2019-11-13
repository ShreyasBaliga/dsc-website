import React from "react";
import style from "./style.module.css";
import { StaticQuery, graphql } from "gatsby";

const footer = ({ data }) => (
  <StaticQuery
    query={graphql`
      fragment footerSiteImages on File {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      query {
        imageFirst: file(relativePath: { eq: "logo3.png" }) {
          ...footerSiteImages
        }
      }
    `}
    render={data => (
      <div>
        <div className={style.container}>
          <div className={style.content}>
            <div className={style.social}>
              <p>Github</p>
              <p>Linkedin</p>
              <p>Instagram</p>
            </div>
            <div className={style.guide}>
              <p>Community Guidelines</p>
              <p> Code of Conduct</p>
            </div>
            <div className={style.address}>
              <p className={style.title}>Developer Students Club Sahyadri</p>
              <p className={style.addresses}>
                Sahyadri College of Engineering and Management, Adyar, Mangalore
                - 575007 IN
              </p>
              <p>
                sosc@sahyadri.edu.in <br />
                +91 9539518599
              </p>
            </div>
          </div>
        </div>

        <div className={style.cp}>
          <center>
            <p className={style.bottom}>DSCS@2019</p>
          </center>
        </div>
      </div>
    )}
  />
);

export default footer;
