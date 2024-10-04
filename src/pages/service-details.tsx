import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import ServiceDetailsAbout from "@/components/containers/service/ServiceDetailsAbout";
import WorkSec from "@/components/containers/home/WorkSec";
import ServiceProject from "@/components/containers/service/ServiceProject";
import TestimonialTwo from "@/components/containers/home-two/TestimonialTwo";
import ServicePricing from "@/components/containers/service/ServicePricing";
import ServiceFaq from "@/components/containers/service/ServiceFaq";
import Trial from "@/components/containers/service/Trial";

const ServiceDetails = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Service Details" />
      <ServiceDetailsAbout />
      <WorkSec />
      <ServiceProject />
      <ServicePricing />
      <TestimonialTwo />
      <ServiceFaq />
      <Trial />
      <SponsorSlider />
    </Layout>
  );
};

export default ServiceDetails;
