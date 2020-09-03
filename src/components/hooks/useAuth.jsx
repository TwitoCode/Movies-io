import { useState } from 'react';
import { auth, db } from '../../Fire';

const useAuth = (email, password) => {
	const [errorMessage, setErrorMessage] = useState('');

	const nullError =
		'There is no user record corresponding to this identifier. The user may have been deleted.';

	const formatError = 'The email address is badly formatted.';
	const inUseError = 'The email address is already in use by another account.';

	const CreateUser = async () => {
		try {
			const cred = await auth.createUserWithEmailAndPassword(email, password);
			console.log(
				`The account ${await cred.user.email} was created and is now signed in`
			);

			const data = { savedMovies: [] };

			setErrorMessage('');

			const doc = db.collection('user-data').doc(cred.user.uid);
			doc.set(data).then(() => (window.location.href = '/'));
		} catch (error) {
			switch (error.message) {
				case inUseError:
					setErrorMessage('That account already Exists');
					break;
				case formatError:
					setErrorMessage('The email address is not formatted correctly');
					break;
				default:
					setErrorMessage('Invalid Account Details');
					break;
			}
		}
	};

	const SignIn = async () => {
		try {
			const cred = await auth.signInWithEmailAndPassword(email, password);
			console.log(`The current user ${await cred.user.email} is now signed in`);

			setErrorMessage('');

			setTimeout(() => {
				window.location.href = '/';
			}, 1000);
		} catch (error) {
			switch (error.message) {
				case nullError:
					setErrorMessage('That account does not Exist');
					break;
				case formatError:
					setErrorMessage('The email address is not formatted correctly');
					break;
				default:
					setErrorMessage('Invalid Account Details');
					break;
			}
		}
	};

	return [CreateUser, SignIn, errorMessage];
};

export default useAuth;
