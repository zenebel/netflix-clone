import axios from "axios"; //  Importing axios from node_modules

// ✅ Create axios instance with base URL
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // TMDB base API
});

export default instance; //  Export the instance
