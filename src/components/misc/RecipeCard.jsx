import React from 'react';
import { Button, Header, Text, FlexContainer } from './Components';
import { Card, CardImg } from 'react-bootstrap';

const RecipeCard = ({ name, image, details }) => {
	return (
		<Card>
			<CardImg src={image} />
			<Card.Body>
				<FlexContainer column>
					<Text>{name}</Text>
					<Card.Text>{details}</Card.Text>
					<Button>Save Recipe</Button>
				</FlexContainer>
			</Card.Body>
		</Card>
	);
};

export default RecipeCard;
