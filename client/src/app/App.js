import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginCard from './../components/cards/LoginCard';
import Register from './../components/Register/Register';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LoginCard} />
				<Route exact path="/register" component={Register} />
			</Switch>
		</Router>
	);
}

export default App;
