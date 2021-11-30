import * as styles from "./Navigation.module.css";

import Link from "gatsby-link";
import React from "react";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link to="/home">Home</Link> <Link to="/destination">Destination</Link>{" "}
      <Link to="/crew">Crew</Link> <Link to="/technology">Technology</Link>
    </div>
  );
};

export default Navigation;
