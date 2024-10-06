import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/vector/ServiceDetailsAbout";
import ServiceProject from "@/components/containers/vector/ServiceProject";
import ServicePricing from "@/components/containers/vector/ServicePricing";
import Testimonial from "@/components/containers/vector/Testimonial";
import ServiceFaq from "@/components/containers/vector/ServiceFaq";
import Trial from "@/components/containers/vector/Trial";
import WorkSec from "@/components/containers/vector/WorkSec";


const VectorService = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Service Details" />
      <ServiceDetailsAbout />
      <WorkSec />
      <ServiceProject />
      <ServicePricing />
      <Testimonial />
      <ServiceFaq />
      <Trial />
      <SponsorSlider />
    </Layout>
  );
};

export default VectorService;
