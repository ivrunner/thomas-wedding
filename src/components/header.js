import React from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";

import gatsbyLogo from "../images/gatsby-icon.png";
import bulmaLogo from "../images/bulma-logo.png";
import flower from "../images/flower.jpg";
import toplogo from "../images/bk-logo.svg";

const Header = ({ siteTitle }) => (
  <section class="hero is-primary is-medium">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src={toplogo} />
      </div>
    </div>
  </section>
);
export default Header;
