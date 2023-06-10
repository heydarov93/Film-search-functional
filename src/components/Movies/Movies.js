import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

const Movies = ({ setFavorites, movies }) => {
  return (
    <ul className="movies">
      {movies &&
        movies.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem
              {...movie}
              setFavorites={setFavorites}
              id={movie.imdbID}
            />
          </li>
        ))}
    </ul>
  );
};

export default Movies;
