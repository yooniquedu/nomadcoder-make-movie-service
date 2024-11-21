function Movie({ title, medium_cover_image, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={medium_cover_image} />
      <p>{summary}</p>
      <h4>genres</h4>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
