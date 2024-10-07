import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/shadowCreation/ServiceDetailsAbout";
import WorkSec from "@/components/containers/shadowCreation/WorkSec";
import ServiceProject from "@/components/containers/shadowCreation/ServiceProject";
import ServicePricing from "@/components/containers/shadowCreation/ServicePricing";
import Testimonial from "@/components/containers/shadowCreation/Testimonial";
import ServiceFaq from "@/components/containers/shadowCreation/ServiceFaq";
import Trial from "@/components/containers/shadowCreation/Trial";


const ShadowCreationService = () => {
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

export default ShadowCreationService;