import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/service/ServiceDetailsAbout";
import WorkSec from "@/components/containers/service/WorkSec";
import ServiceProject from "@/components/containers/service/ServiceProject";
import ServicePricing from "@/components/containers/service/ServicePricing";
import Testimonial from "@/components/containers/service/Testimonial";
import Trial from "@/components/containers/service/Trial";
import AboutFaq from "@/components/containers/about/AboutFaq";


const ClippingPathService = () => {
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

export default ClippingPathService;
