import { anything, background } from "./Moon.module.css";

import Layout from "../layout";
import React from "react";

const Moon = () => {
  return (
    <Layout className={background}>
      <div className={anything}>Moon</div>
    </Layout>
  );
};

export default Moon;
