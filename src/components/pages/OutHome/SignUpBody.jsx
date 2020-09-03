import React from 'react';
import { Jumbotron, Header, Button, StyledLink } from '../../misc/Components';

const image =
	'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/movies-to-watch-1585258004.jpg';

const SignUpBody = () => {
	return (
		<Jumbotron contentCenter column alignCenter img={image} height='50vh'>
			<Header size='100px' bold white>
				What are you waiting for?
			</Header>

			<StyledLink to='/signup'>
				<Button size='30px'>Sign Up Today</Button>
			</StyledLink>
		</Jumbotron>
	);
};

export default SignUpBody;
