import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	fontFamily: 'Open Sans',
};

const App = (props) => {
	return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default App;
