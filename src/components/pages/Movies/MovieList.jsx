import React from 'react';
import { CardDeck, CardColumns } from 'react-bootstrap';
import { FlexContainer } from '../../misc/Components';

const MovieList = ({ movies }) => {
	return (
		<FlexContainer contentCenter>
			<CardColumns style={{ width: '90%' }}>{movies}</CardColumns>
		</FlexContainer>
	);
};

export default MovieList;
