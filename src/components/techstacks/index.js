import React from "react";
import style from "./style.module.css";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const techstacks = ({ props }) => (
    <StaticQuery
      query={graphql`
      fragment techstackSiteImages on File {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      query{
      imageFirst: file(relativePath: { eq: "images/android.jpg" }) {
        ...techstackSiteImages
      }
      imageSecond: file(relativePath: { eq: "images/web.jpg" }) {
        ...techstackSiteImages
      }
      imageThird: file(relativePath: { eq: "images/ml.jpg" }) {
        ...techstackSiteImages
      }
      imageFour: file(relativePath: { eq: "images/cld.jpg" }) {
        ...techstackSiteImages
      }
    
  
        }
      `}
      render={data => (
        <div className={style.container}>
        <div>
        <p className={style.title}>Techstacks We're Excited About </p>
        <center>
        <div className={style.underline}></div>
        </center>
        </div>
        <div className={style.cardholder}>
        <div className={style.card}>
        <div className={style.image}>
        <Img
                fluid={data.imageFirst.childImageSharp.fluid}
                className={style.android}
              />
        <p className={style.cardtitle}>Android Development</p>
        <p className={style.cardcontent}>mastering the latest trends in modern Android development.Every year Google developers release exciting new updates .</p>
        <center><button className={style.herobutton}>Learn More</button></center>
        </div>
          </div>
        <div className={style.card}><div className={style.image}>
        <Img
                fluid={data.imageSecond.childImageSharp.fluid}
                className={style.android}
              />
        <p className={style.cardtitle}>Web Development</p>
        <p className={style.cardcontent}>mastering the latest trends in modern Android development. Every year Google developers release exciting new updates </p>
        <center><button className={style.herobutton}>Learn More</button></center>
        </div></div>
        <div className={style.card}>
        <div className={style.image}>
        <Img
                fluid={data.imageThird.childImageSharp.fluid}
                className={style.android}
              />
        <p className={style.cardtitle}>Machine Learning</p>
        <p className={style.cardcontent}>mastering the latest trends in modern Android development.Every year Google developers release exciting new updates </p>
        <center><button className={style.herobutton}>Learn More</button></center>
        </div>
        </div>
        <div className={style.card}>
        <div className={style.image}>
        <Img
                fluid={data.imageFour.childImageSharp.fluid}
                className={style.android}
              />
        <p className={style.cardtitle}>Cloud Computing</p>
        <p className={style.cardcontent}>mastering the latest trends in modern Android development.Every year Google developers release exciting new updates </p>
        <center><button className={style.herobutton}>Learn More</button></center>
        </div>
        </div>
        
        </div>
     
        
        
        </div>
      )}
    />
  );
  export default techstacks;