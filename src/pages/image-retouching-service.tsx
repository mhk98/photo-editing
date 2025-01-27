import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/imageRetouching/ServiceDetailsAbout";
import WorkSec from "@/components/containers/imageRetouching/WorkSec";
import ServiceProject from "@/components/containers/imageRetouching/ServiceProject";
import ServicePricing from "@/components/containers/imageRetouching/ServicePricing";
import Testimonial from "@/components/containers/imageRetouching/Testimonial";
import Trial from "@/components/containers/imageRetouching/Trial";
import AboutFaq from "@/components/containers/about/AboutFaq";


const ImageRetouchingService = () => {
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

export default ImageRetouchingService;
