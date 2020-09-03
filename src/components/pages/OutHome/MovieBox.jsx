import React from 'react';
import { Text, FlexContainer, Button } from '../../misc/Components';
import { Card, CardImg } from 'react-bootstrap';

const MovieBox = ({ name, image, extra }) => {
	return (
		<Card style={{ maxWidth: '300px' }}>
			<CardImg src={image} />
			<Card.Body>
				<FlexContainer column>
					<Text>{name}</Text>
					<Card.Text>{extra}</Card.Text>
					<Button>Save Movie for Later</Button>
				</FlexContainer>
			</Card.Body>
		</Card>
	);
};

export default MovieBox;
