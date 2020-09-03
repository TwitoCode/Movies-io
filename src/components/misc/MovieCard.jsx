import React from 'react';
import { Button, Header, FlexContainer } from './Components';
import { Card, CardImg } from 'react-bootstrap';

const MovieCard = ({ name, image, details }) => {
	return (
		<Card>
			<CardImg src={image} />
			<Card.Body>
				<FlexContainer column>
					<Header>{name}</Header>
					<Card.Text>{details}</Card.Text>
					<Button>Save Recipe</Button>
				</FlexContainer>
			</Card.Body>
		</Card>
	);
};

export default MovieCard;
