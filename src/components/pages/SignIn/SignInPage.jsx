import React from 'react';
import { FlexContainer, Box } from '../../misc/Components';
import SignInForm from './SignInForm';

const rightImage = 'https://wallpaperaccess.com/full/1512225.jpg';

const SignInPage = () => {
	const style = {
		display: 'grid',
		placeItems: 'center',
		height: '100vh',
		backgroundColor: '#323232',
	};

	const body = {
		display: 'flex',
		height: '90vh',
		width: '90vw',
		backgroundColor: 'white',
	};

	const rightImageBox = {
		height: '100%',
	};

	return (
		<div style={style}>
			<Box style={body} softBorder>
				<FlexContainer contentCenter alignCenter>
					<SignInForm />
				</FlexContainer>
				<Box img={rightImage} style={rightImageBox}></Box>
			</Box>
		</div>
	);
};

export default SignInPage;
