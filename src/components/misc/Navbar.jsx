import React, { useEffect, useState } from 'react';
import { auth } from '../../Fire';
import {
	Bar,
	Text,
	FlexContainer,
	FlexList,
	StyledLink,
	Container,
	Image,
	Button,
} from './Components';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
	const [user, setUser] = useState();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user);
		});
	}, []);

	return (
		<Bar width='100vw' height='7.5vh' alignCenter color='#00c452' softBorder>
			<Container>
				<FlexContainer flex='1' alignCenter>
					<Image src={logo} style={{ paddingRight: '10px' }} />
					<StyledLink to='/'>
						<Text light white size='25px'>
							Recipes.io
						</Text>
					</StyledLink>
				</FlexContainer>
				<FlexContainer flex='0.5' contentAround>
					<FlexList row contentAround>
						<StyledLink to='/recipes' white>
							Recipes
						</StyledLink>
						{user && (
							<StyledLink to='/collection' white>
								Collection
							</StyledLink>
						)}
						<StyledLink to='/about' white>
							About
						</StyledLink>
					</FlexList>
				</FlexContainer>
				<FlexContainer flex='7' contentRight alignCenter>
					{!user && (
						<StyledLink to='/signin'>
							<Button small>Sign In</Button>
						</StyledLink>
					)}
					{user != null && (
						<>
							<Text size='17.5px' white style={{ paddingRight: '20px' }}>
								Signed in as {user.email}
							</Text>
							<Button small onClick={() => auth.signOut()}>
								Sign Out
							</Button>
						</>
					)}
				</FlexContainer>
			</Container>
		</Bar>
	);
};

export default Navbar;
