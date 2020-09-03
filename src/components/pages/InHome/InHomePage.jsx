import React from 'react';
import Navbar from '../../misc/Navbar';
import { Header } from '../../misc/Components';
import HomeRecipes from './HomeRecipes';

const InHomePage = () => {
	return (
		<div>
			<Navbar />
			<HomeRecipes />
		</div>
	);
};

export default InHomePage;
