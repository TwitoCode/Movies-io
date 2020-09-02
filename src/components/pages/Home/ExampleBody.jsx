import React from 'react';
import { Text, Box, Container, Header, Bar } from '../../misc/Components';
import { CardDeck } from 'react-bootstrap';
import RecipeBox from './RecipeBox';

const image01 =
	'https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg';

const image02 =
	'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png?crop=0.670xw:1.00xh;0.0513xw,0&resize=640:*';

const image03 =
	'https://www.eatwell101.com/wp-content/uploads/2018/11/roasted-potatoes-recipe-5-1b-800x800.jpg';

const ExampleBody = () => {
	return (
		<Box width='100vw' height='70vh' color='#dbdbdb' alignCenter contentCenter>
			<Bar contentCenter alignCenter color='black' height='20vh' column>
				<Header white size='50px'>
					Its simple to find what you looking for
				</Header>
				<Text white>You can save recipes you find too</Text>
			</Bar>
			<Container width='50%'>
				<div style={{ marginTop: '20px', marginBottom: '20px' }}>
					<CardDeck>
						<RecipeBox name='Fried Rice' image={image01} extra='Fat: 2.3g' />
						<RecipeBox name='Chicken' image={image02} extra='Protein: 7g' />
						<RecipeBox name='Potatoes' image={image03} extra='Protein: 7g' />
					</CardDeck>
				</div>
			</Container>
		</Box>
	);
};

export default ExampleBody;
