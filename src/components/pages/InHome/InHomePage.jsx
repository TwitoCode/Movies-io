import React from 'react';
import Navbar from '../../misc/Navbar';
import WelcomeHeader from './WelcomeHeader';
import SavedMovies from './SavedMovies';
import SearchPrompt from './SearchPrompt';
import { FlexContainer } from '../../misc/Components';

const InHomePage = () => {
	return (
		<>
			<Navbar />
			<WelcomeHeader />
			<SearchPrompt />
		</>
	);
};

export default InHomePage;
