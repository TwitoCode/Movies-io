import React from 'react';
import { Button, Header, FlexContainer } from './Components';
import { Card, CardImg } from 'react-bootstrap';

const MovieCard = ({ title, poster, year }) => {
	return (
		<Card>
			<CardImg src={poster} />
			<Card.Body>
				{/* <FlexContainer column> */}
				<Card.Title>{title}</Card.Title>
				<Card.Text>Released On: {year}</Card.Text>
				<Button>Save Movie</Button>
				{/* </FlexContainer> */}
			</Card.Body>
		</Card>
	);
};

export default MovieCard;
