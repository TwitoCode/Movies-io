import React, { createContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export const RecipeDataContext = createContext();

const YOUR_APP_ID = '5aab16f7';
const YOUR_APP_KEY = 'c44835b703a9bf4b32a66691df33b153';

const RecipeDataProvider = (props) => {
	const [recipes, setRecipes] = useState([]);
	const [from, setFrom] = useState('0');
	const [to, setTo] = useState('10');
	const [query, setQuery] = useState('chicken');

	const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=${from}&to=${to}`;

	const getData = useCallback(async () => {
		const res = await axios.get(url);
		console.log(res.data);
		setRecipes(res.data.hits);
	}, [url]);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<RecipeDataContext.Provider value={[recipes, setFrom, setTo, setQuery]}>
			{props.children}
		</RecipeDataContext.Provider>
	);
};

export default RecipeDataProvider;
