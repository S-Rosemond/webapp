import { createMuiTheme } from '@material-ui/core';

const main = {
	palette: {
		primary: {
			main: '#065fd4'
		},
		secondary: {
			main: '#333'
		}
	},
	typography: {
		fontFamily: [ 'Roboto Slab', 'Lato', 'Roboto', 'Arial', 'Helvetica', 'sans-serif' ]
	}
};

const mainTheme = createMuiTheme(main);

export default mainTheme;

// #333 black  #ff5722 orange  #065fd4 blue  #2ba640 green
