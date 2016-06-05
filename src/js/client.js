// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// components
import Layout from './components/Layout';
import PersonForm from './components/PersonForm';
// app
const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<Route path="new_person" component={PersonForm}></Route>
		</Route>
	</Router>, 
app);