import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import BlogSingleMain from "@/components/containers/BlogSingleMain";

const BlogSingle = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Blog Details" />
      <BlogSingleMain />
    </Layout>
  );
};

export default BlogSingle;
