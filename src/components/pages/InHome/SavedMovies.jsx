import React, { useState } from 'react';
import { CardDeck } from 'react-bootstrap';
import MovieCard from '../../misc/MovieCard';
import { Header, Box, FlexContainer } from '../../misc/Components';
import axios from 'axios';

const image01 =
	'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._AC_SY741_.jpg';

const apiKey = '41a0f082';

const SavedMovies = () => {
	const [movies, setMovies] = useState([]);

	const fetchMovies = async () => {
		const res = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=avengers`);
		const array = [];

		for (let i = 0; i < 5; i++) {
			if (i === 5) break;

			const data = res.data.Search;
			const { Title, Year, Poster } = data[i];

			array.push(<MovieCard title={Title} poster={Poster} year={Year} />);
		}

		setMovies(array);
	};

	fetchMovies();

	return (
		<Box padding='20px' width='100vw'>
			<FlexContainer contentLeft>
				<Header softUnderline>Saved Moves</Header>
			</FlexContainer>
			<FlexContainer flex={1} contentCenter>
				<CardDeck style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
					{movies != null && movies}
				</CardDeck>
			</FlexContainer>
		</Box>
	);
};

export default SavedMovies;
