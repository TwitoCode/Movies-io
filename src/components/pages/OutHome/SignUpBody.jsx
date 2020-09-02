import React from 'react';
import { Jumbotron, Header, Button, StyledLink } from '../../misc/Components';

const image =
	'https://www.wallpaperup.com/uploads/wallpapers/2014/11/09/511898/ac306ec95717abb0deb01c84ad2eaf0c.jpg';

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
