import { useLocation } from "react-router-dom/cjs/react-router-dom";
import axios from "../Axios";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState();
  const search = useLocation().search;
  let text = new URLSearchParams(search).get("text");
  


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      if (text) {
        const newMovies = response.data.results.filter(movie => {
          return (movie.title || movie.name) && (movie.title || movie.name).toLowerCase().includes(text.toLowerCase());
        });
        setMovies(newMovies);
      } else {
        setMovies(response.data.results.slice(0, 9));
      }
    }
  
    fetchData();
  }, [fetchUrl, text]);


  const base_url = `http://image.tmdb.org/t/p/w500/`;

  return (
    <div className="container2">
      <h2 className="title">{title}</h2>
      <div className="section__container">
        <div className="row">
          {movies &&
            movies.map((movie) => (
              <div className="image__div2" key={movie.id}>
                <img
                  className="section__img2"
                  src={`${base_url}${movie.poster_path}`}
                  alt=""
                />
                <div className="movie__info">
                  <p className="movie__para2">{movie.overview}</p>
                  <h2 className="movie__name2">{(movie.title)}</h2>
                  <h2 className="movie__name2">{movie.release_date}</h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
