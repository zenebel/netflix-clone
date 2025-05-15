// utils/axios.js

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // TMDB Base URL
});

export default instance;
