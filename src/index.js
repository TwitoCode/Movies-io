import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageChecker from './components/pages/HomePageChecker';
import SignUpPage from './components/pages/SignUp/SignUpPage';
import SignInPage from './components/pages/SignIn/SignInPage';
import MoviesPage from './components/pages/Movies/MoviesPage';

ReactDOM.render(
	<Router>
		<App />
		<Switch>
			<Route exact path='/about' component={null} />
			<Route exact path='/signin' component={SignInPage} />
			<Route exact path='/signup' component={SignUpPage} />
			<Route exact path='/collection' component={null} />
			<Route exact path='/' component={HomePageChecker} />
			<Route exact path='/movies' component={MoviesPage} />
		</Switch>
	</Router>,
	document.getElementById('root')
);

serviceWorker.unregister();
