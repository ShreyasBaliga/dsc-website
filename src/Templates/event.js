import React from 'react'
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image'
import style from './css/eventpage.module.css'


export default function Template({
    data, // this prop will be injected by the GraphQL query below.
  }) {
    const { markdownRemark} = data // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark
    return (
      <Layout>
        <div className={style.pageholder}>
      <div className={style.container}>
        <div className={style.page}>
         
          <Img
                className={style.cover_image}
                alt="Cover image"
                fluid={data.markdownRemark.frontmatter.cover.childImageSharp.fluid}
                    />  


          <div className={style.eventinfo}>
        <span className={style.date}>{data.markdownRemark.frontmatter.date}</span>
                  <span className={style.date}>
                    {data.markdownRemark.frontmatter.location}
          </span>
          </div>
          <div
            className={style.eventcontent}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          </div>
        </div>
      </div>
  
      </Layout>
    )
  }
  export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        
        slug
        title
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
`