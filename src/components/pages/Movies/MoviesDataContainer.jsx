import React from 'react';
import MoviesList from './MovieList';
import { MovieSearchContext } from '../../contexts/MovieSearchProvider';
import MovieCard from '../../misc/MovieCard';

const MoviesData = () => {
	const [shownMovies, setShownMovies] = React.useState([]);
	const [, movies] = React.useContext(MovieSearchContext);

	React.useEffect(() => {
		movies &&
			setShownMovies(
				movies.map((movie) => {
					const { Title, Poster, Year } = movie;
					return <MovieCard title={Title} poster={Poster} year={Year} />;
				})
			);
	}, [movies]);

	return (
		<>
			<MoviesList movies={shownMovies} />
		</>
	);
};

export default MoviesData;
