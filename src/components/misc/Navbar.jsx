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
				<FlexContainer flex='1'>
					<Image src={logo} style={{ paddingRight: '10px' }} />
					<Text bold white>
						Recipes.io
					</Text>
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
				<FlexContainer flex='7' contentRight>
					{user && (
						<Text size='17.5px' white>
							Signed in as {user.email}
						</Text>
					)}
				</FlexContainer>
			</Container>
		</Bar>
	);
};

export default Navbar;
