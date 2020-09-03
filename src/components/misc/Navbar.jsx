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
	Header,
} from './Components';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
	const [user, setUser] = useState();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user);
		});
	}, []);

	const onLogout = () => {
		window.location.href = '/';
		auth.signOut();
	};

	return (
		<Bar width='100vw' height='7.5vh' alignCenter color='#323232' softBorder>
			<Container>
				<FlexContainer flex='1' alignCenter row>
					<Image src={logo} style={{ paddingRight: '10px' }} height='20px' />
					<StyledLink to='/'>
						<Header light white size='25px'>
							Movies.io
						</Header>
					</StyledLink>
				</FlexContainer>
				<FlexContainer flex='0.5' contentAround>
					<FlexList row contentAround>
						<StyledLink to='/movies' white>
							Movies
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
							<Button small bgColor='#1c1c1c'>
								Sign In
							</Button>
						</StyledLink>
					)}
					{user != null && (
						<>
							<Text size='17.5px' white style={{ paddingRight: '20px' }}>
								Signed in as {user.email}
							</Text>
							<Button small bgColor='#1c1c1c' onClick={onLogout}>
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
