import React from "react";

import MemberCard from "../components/team_card/index";
import Layout from "../components/layout";
import SEO from "../components/seo";
import style from "./css/team.module.css";

function getMembers(data) {
  let members = [];

  let memberList = data.allMarkdownRemark.edges;

  memberList.map(element => {
    return members.push(
      <MemberCard
        username={element.node.frontmatter.username}
        full_name={element.node.frontmatter.name}
        designation={element.node.frontmatter.designation}
      />
    );
  });

  return members;
}
const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <div className={style.page}>
      <div className={style.wrapper}>
        <p className={style.title}>Core Members</p>
        <div className={style.container}> {getMembers(data)}</div>
      </div>
    </div>
  </Layout>
);

export default SecondPage;

export const teamQuery = graphql`
  query memberQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___id], order: DESC }
      filter: { fileAbsolutePath: { regex: "/members/.*md$/" } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            designation
            name
            username
            id
          }
        }
      }
    }
  }
`;
