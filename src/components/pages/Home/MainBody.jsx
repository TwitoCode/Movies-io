import React from 'react';
import {
	Jumbotron,
	Text,
	Header,
	OutlinedButton,
	StyledLink,
} from '../../misc/Components';

const image = 'https://scstylecaster.files.wordpress.com/2018/01/lentil-chili-recipe.jpg';

const MainBody = () => {
	return (
		<div>
			<Jumbotron alignCenter contentCenter img={image} column darken>
				<Header bold white size='100px'>
					Recipes.io
				</Header>
				<Text white>The place to find the best Recipes for your next meal</Text>
				<StyledLink to='/signup'>
					<OutlinedButton style={{ marginTop: '20px' }}>Sign Up Today</OutlinedButton>
				</StyledLink>
			</Jumbotron>
		</div>
	);
};

export default MainBody;
