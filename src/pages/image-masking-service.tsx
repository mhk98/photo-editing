import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/imageMasking/ServiceDetailsAbout";
import WorkSec from "@/components/containers/imageMasking/WorkSec";
import ServiceProject from "@/components/containers/imageMasking/ServiceProject";
import ServicePricing from "@/components/containers/imageMasking/ServicePricing";
import Testimonial from "@/components/containers/imageMasking/Testimonial";
import Trial from "@/components/containers/imageMasking/Trial";
import AboutFaq from "@/components/containers/about/AboutFaq";


const ImageMaskingService = () => {
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

export default ImageMaskingService;
