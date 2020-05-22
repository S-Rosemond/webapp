import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {CssBaseline} from '@material-ui/core'
import App from './app/App';

ReactDOM.render(
	<React.StrictMode>
		<CssBaseline>
		<App />	
		</CssBaseline>
	</React.StrictMode>,
	document.getElementById('root')
);
