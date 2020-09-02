import React, { useEffect, useState } from 'react';
import OutHomePage from './OutHome/OutHomePage';
import InHomePage from './InHome/InHomePage';
import { auth } from '../../Fire';

const HomePageChecker = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user);
		});
	}, []);

	return (
		<>
			{!user && <OutHomePage />}
			{user && <InHomePage />}
		</>
	);
};

export default HomePageChecker;
