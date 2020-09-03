import React from 'react';
import {
	FlexContainer,
	Header,
	Text,
	Box,
	Button,
	StyledLink,
} from '../../misc/Components';

const SearchPrompt = () => {
	return (
		<Box width='100vw' height='20vw'>
			<FlexContainer column contentCenter alignCenter>
				<Header bold size='50px'>
					Go Search for a Movie
				</Header>
				<Text small>What else are you going to do?</Text>
				<StyledLink to='/movies' style={{ marginTop: '40px' }}>
					<Button>Search</Button>
				</StyledLink>
			</FlexContainer>
		</Box>
	);
};

export default SearchPrompt;
