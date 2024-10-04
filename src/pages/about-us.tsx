import React from "react";
import Layout from "@/components/layout/Layout";
import AboutBanner from "@/components/containers/about/AboutBanner";
import AboutOverview from "@/components/containers/about/AboutOverview";
import AboutMain from "@/components/containers/about/AboutMain";
import AboutSponsor from "@/components/containers/about/AboutSponsor";
import AboutTeam from "@/components/containers/about/AboutTeam";
import AboutFaq from "@/components/containers/about/AboutFaq";
import TestimonialSec from "@/components/containers/home/TestimonialSec";
import AboutCta from "@/components/containers/about/AboutCta";

const AboutUs = () => {
  return (
    <Layout header={1} footer={1}>
      <AboutBanner />
      <AboutOverview />
      <AboutMain />
      <AboutSponsor />
      <AboutTeam />
      <AboutFaq />
      <TestimonialSec />
      <AboutCta />
    </Layout>
  );
};

export default AboutUs;
