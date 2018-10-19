import React from "react";
import styled from "react-emotion";

import Helmet from "react-helmet";
import Navbar from "../components/Navbar";

import { COLORS, SIZES } from "../styles/constants";

const Container = styled("div")`
  background-color: ${COLORS.light};
  color: ${COLORS.dark};
  max-width: ${SIZES.screenSize};
  margin-left: calc((100% - ${SIZES.screenSize}) * 0.6);
  margin-top: 58px;
  padding: 1rem;
  overflow: auto;
`;

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet title="topdeckAndWreck" />
    <Navbar />
    <div>{children}</div>
  </Container>
);

export default TemplateWrapper;
