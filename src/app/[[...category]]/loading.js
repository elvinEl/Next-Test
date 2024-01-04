import React from "react";
import CategoriesLoading from "../../../components/categories/loading";
import FeaturedMovieLoading from "../../../components/featured-movie/loading";
function loading() {
  return (
    <div>
      <FeaturedMovieLoading />
      <CategoriesLoading />
    </div>
  );
}

export default loading;
