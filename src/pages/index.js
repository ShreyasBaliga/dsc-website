import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LandingPage from "../components/LandingPage/index";
import About from "../components/About/index";
import Techstacks from "../components/techstacks/index";
import Getconncted from "../components/getcnnected/index";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <LandingPage />
    <About />
    <Techstacks />
    <Getconncted />
  </Layout>
);

export default IndexPage;
