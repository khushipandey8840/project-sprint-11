import { render, screen } from '@testing-library/react';
import MovieCard from '../components/MovieCard';

const movie = {
  id: 1,
  title: 'Avengers',
  poster_path: '/test.jpg',
  vote_average: 8.5,
};

describe('MovieCard Component', () => {
  test('renders without crashing', () => {
    render(<MovieCard movie={movie} />);
    expect(screen.getByText('Avengers')).toBeInTheDocument();
  });
});