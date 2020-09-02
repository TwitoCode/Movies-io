import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<App />
		<Switch>
			<Route exact path='/signin' component={null} />
			<Route exact path='/signup' component={null} />
			<Route exact path='/' component={null} />
		</Switch>
	</Router>,
	document.getElementById('root')
);
serviceWorker.unregister();
