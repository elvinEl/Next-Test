import React from "react";
import HomeContainer from "../../../containers/home";
import Movies from "../../../mocks/movies.json";
const API_URL = "https://api.themoviedb.org/3/keyword/{keyword_id}/movies";
const getPopularMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjg1Y2M3NWE4YzZhNDE0ZTZkODgzZDM4MjUwZjEwZiIsInN1YiI6IjY1OTkyMDAzYmQ1ODhiMDI1ZTU4MjIwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SPRzjMSDFeyVfcU8Pr7NJ9NyAFxOSZ9Tl3C5Hje8VeY",
    },
  };
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );
  return res.json();
};
const getTopRated = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjg1Y2M3NWE4YzZhNDE0ZTZkODgzZDM4MjUwZjEwZiIsInN1YiI6IjY1OTkyMDAzYmQ1ODhiMDI1ZTU4MjIwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SPRzjMSDFeyVfcU8Pr7NJ9NyAFxOSZ9Tl3C5Hje8VeY",
    },
  };
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );
  return res.json();
};

const getCategoryList = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjg1Y2M3NWE4YzZhNDE0ZTZkODgzZDM4MjUwZjEwZiIsInN1YiI6IjY1OTkyMDAzYmQ1ODhiMDI1ZTU4MjIwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SPRzjMSDFeyVfcU8Pr7NJ9NyAFxOSZ9Tl3C5Hje8VeY",
    },
  };
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en-US&page=1",
    options
  );
  return res.json();
};


async function HomePage({ params }) {
  let selectedCategory;
  const topRatedPropmise = getTopRated();
  const popularMoviesPromise = getPopularMovies();
  const categoryListPromise = getCategoryList();
  const [
    { results: popularMovies },
    { results: topRatedMovies },
    { genres: categoriesList },
  ] = await Promise.all([
    topRatedPropmise,
    popularMoviesPromise,
    categoryListPromise,
  ]);
  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categoriesList={categoriesList}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 6) : [],
      }}
    />
  );
}

export default HomePage;
