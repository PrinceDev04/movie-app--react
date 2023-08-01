import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    // seacrhUrl: "https://search/movie/api_key=89dd0896e5452a83bc0ba68e65e62acc&query="
})

export default instance