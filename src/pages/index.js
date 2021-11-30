import * as React from "react";

import Home from "../components/home/home";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout className="home">
      <Home />
    </Layout>
  );
};

export default IndexPage;
