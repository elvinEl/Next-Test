import React from "react";
import { MovieContainer } from "../../../../containers/movie";
import Movies from "../../../../mocks/movies.json";
function MoviePage({ params }) {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );
  console.log(params);
  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
