import React, { useEffect, useState } from 'react';
import OutHomePage from './OutHome/OutHomePage';
import InHomePage from './InHome/InHomePage';
import { auth } from '../../Fire';

const HomePageChecker = () => {
	const [, setUser] = useState(null);
	const [screenToShow, setScreenToShow] = useState(<></>);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user);

			if (user) {
				setScreenToShow(<InHomePage />);
			} else {
				setScreenToShow(<OutHomePage />);
			}
		});
	}, []);

	return <>{screenToShow}</>;
};

export default HomePageChecker;
