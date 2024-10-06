import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/automotive/ServiceDetailsAbout";
import WorkSec from "@/components/containers/automotive/WorkSec";
import ServiceProject from "@/components/containers/automotive/ServiceProject";
import ServicePricing from "@/components/containers/automotive/ServicePricing";
import Testimonial from "@/components/containers/automotive/Testimonial";
import ServiceFaq from "@/components/containers/automotive/ServiceFaq";
import Trial from "@/components/containers/automotive/Trial";


const AutomotiveService = () => {
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

export default AutomotiveService;
