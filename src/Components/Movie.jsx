import React, { useEffect, useState } from "react";
import axios from "../Axios";
import requests from "../Key";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Movie = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovies(response.data.results.slice(0, 4));
      return response;
    }

    fetchData();
  }, []);

  const base_url = `http://image.tmdb.org/t/p/w500/`;

  return (
    <div className="container">
      <div className="heading">
        <h2 className="section__title">Netflix Originals</h2>
        <Link to="/movie">
          <button className="btn">More Movies</button>
        </Link>
      </div>
      <div className="section__container">
        {movies &&
          movies.map((movie) => (
            <div className="image__div" key={movie.id}>
              <img
                className="section__img"
                src={`${base_url}${movie.poster_path}`}
                alt=""
              />
              <div className="movie__info">
                <p className="movie__para">{movie.overview}</p>
                <h2 className="movie__name">{movie.name.toUpperCase()}</h2>
                <h2 className="movie__name">{movie.first_air_date}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Movie;
