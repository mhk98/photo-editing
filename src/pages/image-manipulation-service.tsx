import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/imageManipulation/ServiceDetailsAbout";
import WorkSec from "@/components/containers/imageManipulation/WorkSec";
import ServiceProject from "@/components/containers/imageManipulation/ServiceProject";
import ServicePricing from "@/components/containers/imageManipulation/ServicePricing";
import Testimonial from "@/components/containers/imageManipulation/Testimonial";
import ServiceFaq from "@/components/containers/imageManipulation/ServiceFaq";
import Trial from "@/components/containers/imageManipulation/Trial";


const ImageManipulationService = () => {
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

export default ImageManipulationService;
