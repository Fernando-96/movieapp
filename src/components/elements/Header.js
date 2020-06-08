import React from "react";
import { Link } from "@reach/router";

import RMDBLogo from "../images/Movie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";

import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo,
} from "../styles/StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyledRMDBLogo src={RMDBLogo} alt="react-logo" />
        </Link>
        <StyledTMDBLogo src={TMDBLogo} alt="TMDB-logo" />
      </div>
    </StyledHeader>
  );
};

export default Header;
