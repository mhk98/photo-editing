import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import QuoteOverview from "@/components/containers/quote/QuoteOverview";
import CustomQuote from "@/components/containers/quote/CustomQuote";
import QuoteInstructions from "@/components/containers/quote/QuoteInstructions";

const GetQuote = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Get A Quote" />
      <QuoteOverview />
      <CustomQuote />
      <QuoteInstructions />
    </Layout>
  );
};

export default GetQuote;
