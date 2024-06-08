import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black  p-6">
      <div className="-mt-48 relative z-40 no-scrollbar  overflow-x-scroll pl-12">
        <MovieLists title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieLists title={"UpComing"} movies={movies.upComingMovies} />
        <MovieLists title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieLists title={"Popular"} movies={movies.popularMovies} />
        <MovieLists title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>

      {/* MovieList- Popular
    -Movie Card
    MovieList- Trending
    -Movie Card
    MovieList-Horror
    -MovieCard
    MovieList-Now Playing
    -MovieCard
     */}
    </div>
  );
};

export default SecondaryContainer;
