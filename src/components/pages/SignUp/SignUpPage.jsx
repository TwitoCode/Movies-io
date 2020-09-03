import React from 'react';
import { FlexContainer, Box } from '../../misc/Components';
import SignUpForm from './SignUpForm';

const rightImage =
	'https://i.pinimg.com/originals/3c/f6/56/3cf656908a2481110485bac3bf1297d9.jpg';

const SignUpPage = () => {
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
					<SignUpForm />
				</FlexContainer>
				<Box img={rightImage} style={rightImageBox}></Box>
			</Box>
		</div>
	);
};

export default SignUpPage;
