import { getPopularMovies } from "../lib/tmdb";
import MovieGrid from "../components/MovieGrid";

export default async function HomePage() {
  const movies = await getPopularMovies();

  return (
    <main>
      <header className="navbar">
        <h1>🎬 Cine-Stream</h1>
      </header>

      <section className="hero">
        <h2>Popular Movies</h2>
        <p>Explore the most popular movies right now.</p>
      </section>

      <MovieGrid movies={movies} />
    </main>
  );
}