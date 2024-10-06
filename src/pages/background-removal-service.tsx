import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/backgroundRemoval/ServiceDetailsAbout";
import WorkSec from "@/components/containers/backgroundRemoval/WorkSec";
import ServiceProject from "@/components/containers/backgroundRemoval/ServiceProject";
import ServicePricing from "@/components/containers/backgroundRemoval/ServicePricing";
import ServiceFaq from "@/components/containers/backgroundRemoval/ServiceFaq";
import Trial from "@/components/containers/backgroundRemoval/Trial";
import Testimonial from "@/components/containers/backgroundRemoval/Testimonial";


const BackgroundRemovalService = () => {
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

export default BackgroundRemovalService;
