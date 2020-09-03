import React from 'react';
import Navbar from '../../misc/Navbar';
import SearchBox from './SearchBox';
import MovieSearchProvider from '../../contexts/MovieSearchProvider';
import MoviesDataContainer from './MoviesDataContainer';

const MoviesPage = () => {
	return (
		<MovieSearchProvider>
			<Navbar />
			<SearchBox />
			<MoviesDataContainer />
		</MovieSearchProvider>
	);
};

export default MoviesPage;
