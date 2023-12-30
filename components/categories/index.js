import React from "react";
import Link from "next/link";
import "./style.css";

function Categories({ categories }) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <Link
          key={category.id}
          className="category"
          href={`/${category.id}`}
        >
          <div className="name">{category.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
