import React from 'react';
import style from "./style.module.css";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const getconncted =( {data} )=>(

<StaticQuery
    query={graphql`
    fragment gcSiteImages on File {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    query{
    imageFirst: file(relativePath: { eq: "images/gc.png" }) {
      ...gcSiteImages
    }
  

      }
    `}
    
      render ={data=>(
          <div className={style.container}>
              <div className={style.content}>
              <div className={style.image}>
              <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.about}
          />
              </div>
              <div className={style.textcontent}>
              <p className={style.title}> Get connected.</p>
              <div className={style.underline}></div>
              <p className={style.info}>Meet people with similar interest to work together on projects and host events to build a better collaborative environment. We are more than 100 members with interests on various fields of technology here to know each other and get connected. 
              Meet our members to know more about us and build something cool!</p>
              <button className={style.aboutbutton}>Learn More</button>
              </div>
              </div>



          </div>
      )}
      />
);

export default getconncted;