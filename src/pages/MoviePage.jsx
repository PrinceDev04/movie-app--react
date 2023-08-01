import React from "react"; 
import Row from "../Components/Row";
import requests from "../Key";

const MoviePage = () => {
    return(
        <div>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}  />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}  />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
        </div>
    )
}

export default MoviePage