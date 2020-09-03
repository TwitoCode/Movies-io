import React, { useContext } from 'react';
import { RecipeDataContext } from '../../contexts/RecipeDataProvider';

const HomeRecipes = () => {
	const [recipes, setFrom, setTo, setQuery] = useContext(RecipeDataContext);

	return (
		<div>
			{recipes[0] !== null &&
				recipes.map((recipe) => {
					return <h1>{recipe.recipe.label}</h1>;
				})}
		</div>
	);
};

export default HomeRecipes;
