import { render, screen } from "@testing-library/react";
import MovieGrid from "../components/MovieGrid";

const movies = [
  {
    id: 1,
    title: "Avengers",
    poster_path: "/test.jpg",
    vote_average: 8.5,
  },
];

describe("MovieGrid Component", () => {
  test("renders without crashing", () => {
    render(<MovieGrid movies={movies} />);
    expect(screen.getByText("Avengers")).toBeInTheDocument();
  });
});