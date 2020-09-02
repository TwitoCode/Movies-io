import React from 'react';
import Navbar from './components/misc/Navbar';
import { ThemeProvider } from 'styled-components';

const theme = {
	fontFamily: 'Open Sans',
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
		</ThemeProvider>
	);
};

export default App;
