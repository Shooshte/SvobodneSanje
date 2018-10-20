import React from "react";

import Helmet from "react-helmet";
import Navbar from "../components/Navbar";

import "../styles/layout.sass";

const TemplateWrapper = ({ children }) => (
  <div className="layout-container">
    <Helmet title="topdeckAndWreck" />
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
