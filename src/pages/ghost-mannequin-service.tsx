import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/ghostMannequin/ServiceDetailsAbout";
import WorkSec from "@/components/containers/ghostMannequin/WorkSec";
import ServiceProject from "@/components/containers/ghostMannequin/ServiceProject";
import ServicePricing from "@/components/containers/ghostMannequin/ServicePricing";
import Testimonial from "@/components/containers/ghostMannequin/Testimonial";
import ServiceFaq from "@/components/containers/ghostMannequin/ServiceFaq";
import Trial from "@/components/containers/ghostMannequin/Trial";


const GhostMannequinService = () => {
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

export default GhostMannequinService;
