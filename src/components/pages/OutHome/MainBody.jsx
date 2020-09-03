import React from 'react';
import {
	Jumbotron,
	Text,
	Header,
	OutlinedButton,
	StyledLink,
} from '../../misc/Components';

const image = 'https://wallpapercave.com/wp/wp1945898.jpg';

const MainBody = () => {
	return (
		<div>
			<Jumbotron alignCenter contentCenter img={image} column darken>
				<Header bold white size='100px'>
					Movies.io
				</Header>
				<Text white>The place to find the next Movie for you to watch</Text>
				<StyledLink to='/signup'>
					<OutlinedButton style={{ marginTop: '20px' }}>Sign Up Today</OutlinedButton>
				</StyledLink>
			</Jumbotron>
		</div>
	);
};

export default MainBody;
