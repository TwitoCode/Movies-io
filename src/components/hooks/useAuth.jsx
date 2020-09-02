import React, { useState } from 'react';
import { auth, db } from '../../Fire';

const useAuth = (email, password) => {
	const [errorMessage, setErrorMessage] = useState('');

	const CreateUser = () => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((cred) => {
				console.log(`The account ${cred.user.email} was created and is now signed in`);

				const data = {
					savedRecipes: [],
				};

				db.collection('User-Data').doc(cred.user.uid).set(data);
				setErrorMessage('');
			})
			.catch((error) => {
				setErrorMessage('This account already exists');
			});
	};

	const SignIn = () => {
		auth.signInWithEmailAndPassword(email, password).then((cred) => {
			console.log(`The current user ${cred.user.email} is now signed in`);
		});
	};

	return [CreateUser, SignIn, errorMessage];
};

export default useAuth;
