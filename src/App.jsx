import React from 'react';
import { ThemeProvider } from 'styled-components';
import RecipeDataProvider from './components/contexts/RecipeDataProvider';

const theme = {
	fontFamily: 'Open Sans',
};

const App = (props) => {
	return (
		<RecipeDataProvider>
			<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
		</RecipeDataProvider>
	);
};

export default App;
