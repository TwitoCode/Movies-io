import React from 'react';
import axios from 'axios';

export const MovieSearchContext = React.createContext();
const apiKey = '41a0f082';

const MovieSearchProvider = (props) => {
	const [query, setQuery] = React.useState('');
	const [movies, setMovies] = React.useState();

	React.useEffect(() => {
		const getData = async () => {
			const res = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
			console.log(await res.data.Search);
			setMovies(res.data.Search);
		};

		getData();
	}, [query]);

	return (
		<MovieSearchContext.Provider value={[setQuery, movies]}>
			{props.children}
		</MovieSearchContext.Provider>
	);
};

export default MovieSearchProvider;
