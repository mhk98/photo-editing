import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import SponsorSlider from "@/components/containers/home/SponsorSlider";
import TeamMainSec from "@/components/containers/TeamMainSec";

const Teams = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Our Teams" />
      <TeamMainSec />
      <SponsorSlider />
    </Layout>
  );
};

export default Teams;
