import React from 'react';
import { Jumbotron, Text, OutlinedButton } from '../../misc/Components';

const image = 'https://scstylecaster.files.wordpress.com/2018/01/lentil-chili-recipe.jpg';

const MainBody = () => {
	return (
		<div>
			<Jumbotron alignCenter contentCenter img={image} column darken>
				<Text bold white size='100px'>
					Recipes.io
				</Text>
				<Text white>The place to find the best Recipes for your next meal</Text>
				<OutlinedButton style={{ marginTop: '20px' }}>Sign Up Today</OutlinedButton>
			</Jumbotron>
		</div>
	);
};

export default MainBody;
