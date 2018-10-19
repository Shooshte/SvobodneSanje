import React from "react";
import { Link } from "gatsby";
import styled from "react-emotion";

import { COLORS, SIZES } from "../styles/constants";

const Container = styled("nav")`
  position: fixed;
  padding: 1rem;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${COLORS.main};
  .links-container {
    max-width: ${SIZES.screenSize};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .nav-link {
    color: ${COLORS.light};
    padding: 0 1rem;
    text-decoration: none;
  }
  @media only screen and (min-width: 60ch) {
    .links-container {
      margin-left: calc((100% - ${SIZES.screenSize}) * 0.6);
    }
  }
`;

const Navbar = () => (
  <Container>
    <div className="links-container">
      <Link to="/" className="nav-link">
        Blog
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
    </div>
  </Container>
);

export default Navbar;
