import React from 'react';
import { Button, Header, FlexContainer } from './Components';
import { Card, CardImg } from 'react-bootstrap';

const MovieCard = ({ title, poster, year }) => {
	return (
		<Card style={{ maxWidth: '350px' }}>
			<CardImg src={poster} />
			<Card.Body>
				<FlexContainer column>
					<Header>{title}</Header>
					<Card.Text>Released On: {year}</Card.Text>
					<Button>Save Movie</Button>
				</FlexContainer>
			</Card.Body>
		</Card>
	);
};

export default MovieCard;
