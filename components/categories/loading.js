import React from "react";
import Skeleton from "../../components/skeleton/index";

function CategoriesLoading() {
  return (
    <div className="categories">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={72} />
        ))}
    </div>
  );
}

export default CategoriesLoading;
