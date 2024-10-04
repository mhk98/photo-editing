import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/Banner/HomeOneBanner";
import Services from "@/components/containers/home/Services";
import AboutSec from "@/components/containers/home/AboutSec";
import WorkSec from "@/components/containers/home/WorkSec";
import ChooseSec from "@/components/containers/home/ChooseSec";
import QualitySec from "@/components/containers/home/QualitySec";
import TestimonialSec from "@/components/containers/home/TestimonialSec";
import PricingPlan from "@/components/containers/home/PricingPlan";
import NewsSec from "@/components/containers/home/NewsSec";
import CTA from "@/components/containers/home/CTA";
import SponsorSlider from "@/components/containers/home/SponsorSlider";

const Home = () => {
  return (
    <Layout header={1} footer={1}>
      <HomeOneBanner />
      <Services />
      <AboutSec />
      <WorkSec />
      <ChooseSec />
      <QualitySec />
      <TestimonialSec />
      <PricingPlan />
      <NewsSec />
      <CTA />
      <SponsorSlider />
    </Layout>
  );
};

export default Home;
