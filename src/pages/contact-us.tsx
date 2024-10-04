import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import ContactSec from "@/components/containers/ContactSec";

const ContactUs = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Contact Us" />
      <ContactSec />
    </Layout>
  );
};

export default ContactUs;
