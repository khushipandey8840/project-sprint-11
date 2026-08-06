const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Popular Movies
export async function getPopularMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  const data = await response.json();
  return data.results;
}

// Single Movie Details
export async function getMovieById(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }

  return await response.json();
}