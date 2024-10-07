import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/imageRestoration/ServiceDetailsAbout";
import WorkSec from "@/components/containers/imageRestoration/WorkSec";
import ServiceProject from "@/components/containers/imageRestoration/ServiceProject";
import ServicePricing from "@/components/containers/imageRestoration/ServicePricing";
import Testimonial from "@/components/containers/imageRestoration/Testimonial";
import ServiceFaq from "@/components/containers/imageRestoration/ServiceFaq";
import Trial from "@/components/containers/imageRestoration/Trial";


const ImageRestorationService = () => {
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

export default ImageRestorationService;