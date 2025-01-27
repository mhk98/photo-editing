import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/colorCorrection/ServiceDetailsAbout";
import WorkSec from "@/components/containers/colorCorrection/WorkSec";
import ServiceProject from "@/components/containers/colorCorrection/ServiceProject";
import ServicePricing from "@/components/containers/colorCorrection/ServicePricing";
import Testimonial from "@/components/containers/colorCorrection/Testimonial";
import Trial from "@/components/containers/colorCorrection/Trial";
import AboutFaq from "@/components/containers/about/AboutFaq";


const ColorCorrectionService = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Service Details" />
      <ServiceDetailsAbout />
      <WorkSec />
      <ServiceProject />
      <ServicePricing />
      <Testimonial />
      <AboutFaq />
      <Trial />
      <SponsorSlider />
    </Layout>
  );
};

export default ColorCorrectionService;
