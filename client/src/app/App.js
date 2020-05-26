import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Buttons from '../components/buttons/Buttons';
import Register from './../components/Register/Register';
import { ThemeProvider } from '@material-ui/core';
import mainTheme from '../theme/main.theme';

function App() {
	return (
		<ThemeProvider theme={mainTheme}>
			<Router>
				<Switch>
					<Route exact path="/" component={Buttons} />
					<Route exact path="/register" component={Register} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
