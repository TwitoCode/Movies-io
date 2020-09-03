import React from 'react';
import { Jumbotron, Header, Text } from '../../misc/Components';

const image =
	'https://cutewallpaper.org/21/top-movies-wallpaper-1920x1080/Classic-Movies-Wallpapers-56+-images-.jpg';

const WelcomeHeader = () => {
	return (
		<Jumbotron img={image} alignCenter contentCenter column>
			<Header white bold size='75px'>
				Welcome Back
			</Header>
			<Text white>Go search for more movies that you may like</Text>
		</Jumbotron>
	);
};

export default WelcomeHeader;
