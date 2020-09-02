import React from 'react';
import MainBody from './MainBody';
import ExampleBody from './ExampleBody';
import SignUpBody from './SignUpBody';
import Navbar from '../../misc/Navbar';

const HomePage = () => {
	return (
		<>
			<Navbar />
			<MainBody />
			<ExampleBody />
			<SignUpBody />
		</>
	);
};

export default HomePage;
