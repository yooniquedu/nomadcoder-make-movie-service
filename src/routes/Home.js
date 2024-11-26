import { useEffect, useState } from "react";
import Movie from "../movieService/components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      );
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    };

    getMovies();
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
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            coverImg={movie.medium_cover_image}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))
        // movies.map((movie) => <Movie key={movie.id} {...movie} />)
      )}
    </div>
  );
}

export default Home;
