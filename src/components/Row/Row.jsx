// Import required hooks and utilities
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";  // Axios instance
import "./Row.css"; // Row styling

function Row({ title, fetchUrl }) {
  // Local state to store fetched movies
  const [movies, setMovies] = useState([]);

  // Fetch movies when the component mounts or fetchUrl changes
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl); // Make API call
      setMovies(response.data.results); // Store the movie results
    }
    fetchData();
  }, [fetchUrl]); // Dependency array to refetch if fetchUrl changes

  return (
    <div className="rowSection">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
