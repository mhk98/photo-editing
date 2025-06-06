import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/reflectionCreation/ServiceDetailsAbout";
import WorkSec from "@/components/containers/reflectionCreation/WorkSec";
import ServiceProject from "@/components/containers/reflectionCreation/ServiceProject";
import ServicePricing from "@/components/containers/reflectionCreation/ServicePricing";
import Testimonial from "@/components/containers/reflectionCreation/Testimonial";
import Trial from "@/components/containers/reflectionCreation/Trial";
import AboutFaq from "@/components/containers/about/AboutFaq";


const ReflectionCreationService = () => {
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

export default ReflectionCreationService;
