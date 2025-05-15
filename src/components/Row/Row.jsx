import "./Row.css";
function Row({ title, movies }) {
  return (
    <div className="rowSection">
      {/* wrapper includes both title and posters  */}
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            key={index}
            className="row__poster"
            src={movie.src}
            alt={movie.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
