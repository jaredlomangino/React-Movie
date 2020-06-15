import React from "react";

import HeroImage from "./elements/HeroImage";
import Grid from "./elements/Grid";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import MovieThumb from "./elements/MovieThumb";
import SearchBar from "./elements/SearchBar";
import Spinner from "./elements/Spinner";

const Home = () => {
  <>
    <HeroImage />
    <SearchBar />
    <Grid />
    <MovieThumb />
    <Spinner />
    <LoadMoreBtn />
  </>;
};

export default Home;
