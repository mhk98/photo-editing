import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/imageMasking/ServiceDetailsAbout";
import WorkSec from "@/components/containers/imageMasking/WorkSec";
import ServiceProject from "@/components/containers/imageMasking/ServiceProject";
import ServicePricing from "@/components/containers/imageMasking/ServicePricing";
import Testimonial from "@/components/containers/imageMasking/Testimonial";
import ServiceFaq from "@/components/containers/imageMasking/ServiceFaq";
import Trial from "@/components/containers/imageMasking/Trial";


const ImageMaskingService = () => {
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

export default ImageMaskingService;
