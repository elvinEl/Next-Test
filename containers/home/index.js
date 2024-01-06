import React from "react";
import Movies from "../../mocks/movies.json";
import Genres from "../../mocks/genres.json";
import FeaturedMovie from "../../components/featured-movie";
import Categories from "../../components/categories";
import MoviesSection from "../../components/movies-section";

function HomeContainer({
  popularMovies = [],
  topRatedMovies = [],
  categoriesList = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categoriesList.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categoriesList.find((genre) => `${genre.id}` === selectedCategory.id)
              ?.name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Popular films" movies={popularMovies.slice(1, 7)} />
      <MoviesSection
        title="Your favorites"
        movies={topRatedMovies.slice(7, 13)}
      />
    </div>
  );
}

export default HomeContainer;
