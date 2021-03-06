import React from "react";
import { Link } from "@reach/router";

import { StyledMovieThumb } from "../styles/StyledMovieThumb";

function MovieThumb({ image, movieId, clickable }) {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img className="clickable" src={image} alt="movieThumb" />
        </Link>
      ) : (
        <img src={image} alt="movieThumb" />
      )}
    </StyledMovieThumb>
  );
}

export default MovieThumb;
