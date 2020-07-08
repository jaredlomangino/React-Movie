import React from "react";
import { Link } from "@reach/router";

import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, movieId, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img className="clickable" src={image} />
      </Link>
    ) : (
      <img src={image} />
    )}
  </StyledMovieThumb>
);

export default MovieThumb;
