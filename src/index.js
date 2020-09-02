import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/Home/HomePage';

ReactDOM.render(
	<Router>
		<App />
		<Switch>
			<Route exact path='/about' component={null} />
			<Route exact path='/recipes' component={null} />
			<Route exact path='/signin' component={null} />
			<Route exact path='/signup' component={null} />
			<Route exact path='/' component={HomePage} />
			<Route exact path='/collection' component={null} />
		</Switch>
	</Router>,
	document.getElementById('root')
);
serviceWorker.unregister();
