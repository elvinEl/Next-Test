import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import "./style.css";

function FeaturedMovie({ movie = {}, isCompact = true }) {
    const { poster_path, title, overview } = movie;

  return (
    <div className="movieWrapper">
      <h1 className="movieTitle">{title}</h1>
      <p
        className={`overview ${
          isCompact ? "shortOverview" : ""
        }`}
      >
        {overview}
      </p>
      <div className="actionButtons">
        <Link className="playButton" href={`/movie/${movie.id}`}>
          Play
        </Link>
        <button className="addButton">
          <FaPlus />
        </button>
      </div>
      <div className="moviePoster">
        <div className="moviePosterOverlay"></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
}

export default FeaturedMovie;
