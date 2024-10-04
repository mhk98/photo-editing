import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import PricingMain from "@/components/containers/pricing/PricingMain";
import PricingProject from "@/components/containers/pricing/PricingProject";
import AboutFaq from "@/components/containers/about/AboutFaq";

const Pricing = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Pricing Plan" />
      <PricingMain />
      <PricingProject />
      <AboutFaq />
    </Layout>
  );
};

export default Pricing;
