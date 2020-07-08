import React from "react";

import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, movieId, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <img className="clickable" src={image} />
    ) : (
      <img src={image} />
    )}
  </StyledMovieThumb>
);

export default MovieThumb;
