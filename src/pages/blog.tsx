import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/Banner/CmnBanner";
import BlogMain from "@/components/containers/BlogMain";

const Blog = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Blog" />
      <BlogMain />
    </Layout>
  );
};

export default Blog;
