import React from "react";
import HomeTwoBanner from "@/components/layout/Banner/HomeTwoBanner";
import Layout from "@/components/layout/Layout";
import CounterSec from "@/components/containers/home-two/CounterSec";
import AboutTwoSec from "@/components/containers/home-two/AboutTwoSec";
import ServicesTwoSec from "@/components/containers/home-two/ServicesTwoSec";
import FeatureTwoSec from "@/components/containers/home-two/FeatureTwoSec";
import ChooseSec from "@/components/containers/home/ChooseSec";
import CtaTwo from "@/components/containers/home-two/CtaTwo";
import SponsorSliderDark from "@/components/containers/home/SponsorSliderDark";
import TestimonialTwo from "@/components/containers/home-two/TestimonialTwo";
import PricingTwo from "@/components/containers/home-two/PricingTwo";
import Faq from "@/components/containers/home-two/Faq";
import ProjectSec from "@/components/containers/home-two/ProjectSec";
import NewsTwo from "@/components/containers/home-two/NewsTwo";

const HomeTwoDark = () => {
  return (
    <Layout header={3} footer={2}>
      <HomeTwoBanner />
      <CounterSec />
      <AboutTwoSec />
      <ServicesTwoSec />
      <FeatureTwoSec />
      <ChooseSec />
      <CtaTwo />
      <TestimonialTwo />
      <PricingTwo />
      <Faq />
      <ProjectSec />
      <NewsTwo />
      <SponsorSliderDark />
    </Layout>
  );
};

export default HomeTwoDark;
