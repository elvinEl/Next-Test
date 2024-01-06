import { notFound } from "next/navigation";
import React from "react";
import MovieContainer from "../../../../containers/movie";
import Movies from "../../../../mocks/movies.json";

const getMovie = async (movieId) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjg1Y2M3NWE4YzZhNDE0ZTZkODgzZDM4MjUwZjEwZiIsInN1YiI6IjY1OTkyMDAzYmQ1ODhiMDI1ZTU4MjIwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SPRzjMSDFeyVfcU8Pr7NJ9NyAFxOSZ9Tl3C5Hje8VeY",
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  return res.json();
};

async function MoviePage({ params }) {
  const movieDetail = await getMovie(params.id)
  if (!movieDetail) {
    notFound();
  }
  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
