import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {/* Main Container
        - Background vedio
        - Vedio Title

        Secondary Title
        - Movie List *n
        - Movie Card *n

      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
