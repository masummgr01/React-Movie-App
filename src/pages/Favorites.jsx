import '../css/Favorites.css'
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (  
      <div className="favorites">
      <div className="movies-grid">
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
    </div>  
      );
  }

  return <div className="favorites-empty">
    <h1>No favorite movies yet.</h1>
    <p>start adding your favorite movies!</p>
  </div>
}
export default Favorites;