import Layout from "../layout";
import React from "react";
import { background } from "./Home.module.css";

const Home = () => {
  return (
    <Layout className={background}>
      <p>
        So, you want to travel to Space Let’s face it; if you want to go to
        space, you might as well genuinely go to outer space and not hover kind
        of on the edge of it. Well sit back, and relax because we’ll give you a
        truly out of this world experience! Explore
      </p>
    </Layout>
  );
};

export default Home;
