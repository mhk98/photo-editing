import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import PortfolioMain from "@/components/containers/portfolio/PortfolioMain";
import PortfolioPopup from "@/components/containers/portfolio/PortfolioPopup";
import FeatureTwoSec from "@/components/containers/home-two/FeatureTwoSec";
import Faq from "@/components/containers/home-two/Faq";
import ProjectSec from "@/components/containers/home-two/ProjectSec";
import PortfolioSponsorSlider from "@/components/containers/portfolio/PortfolioSponsorSlider";

const Portfolio = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Portfolio" />
      <PortfolioMain />
      <PortfolioPopup />
      <FeatureTwoSec />
      <Faq />
      <ProjectSec />
      <PortfolioSponsorSlider />
    </Layout>
  );
};

export default Portfolio;
