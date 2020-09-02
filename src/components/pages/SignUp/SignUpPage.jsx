import React from 'react';
import { FlexContainer, Text, Header, Box } from '../../misc/Components';
import SignUpForm from './SignUpForm';

const rightImage =
	'https://s1.1zoom.me/b6648/834/Tomatoes_Pasta_Fork_Plate_544330_1920x1080.jpg';

const SignUpPage = () => {
	const style = {
		display: 'grid',
		placeItems: 'center',
		height: '100vh',
		backgroundColor: '#00c452',
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
