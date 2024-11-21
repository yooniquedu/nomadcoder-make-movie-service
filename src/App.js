import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }, []);
  // useEffect(() => {
  //   fetch(
  //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setMovies(json.data.movies);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div>
      {loading ? (
        <h2>서비스를 준비중입니다...</h2>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={movie.medium_cover_image} />
            <p>{movie.summary}</p>
            <h4>genres</h4>
            <ul>
              {movie.hasOwnProperty("genres")
                ? movie.genres.map((genre) => <li key={genre}>{genre}</li>)
                : null}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
