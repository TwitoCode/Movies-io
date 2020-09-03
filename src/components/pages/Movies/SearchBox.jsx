import React from 'react';
import {
	InputBox,
	Header,
	Button,
	FlexContainer,
	Jumbotron,
	Box,
} from '../../misc/Components';
import useInput from '../../hooks/useInput';
import { MovieSearchContext } from '../../contexts/MovieSearchProvider';

const inputStyle = {
	width: '50rem',
	paddingLeft: '10px',
};

const image =
	'https://www.somagnews.com/wp-content/uploads/2020/06/17-e1592686177820.jpeg';

const SearchBox = () => {
	const [movieName, bindMovieName] = useInput('');
	const [setQuery, ,] = React.useContext(MovieSearchContext);

	const handleSearch = (e) => {
		e.preventDefault();
		setQuery(movieName);
	};

	return (
		<Jumbotron img={image}>
			<FlexContainer contentCenter>
				<FlexContainer contentCenter column alignCenter>
					<Header white bold size='75px'>
						Search
					</Header>
					<form onSubmit={handleSearch}>
						<FlexContainer column alignCenter>
							<InputBox
								{...bindMovieName}
								placeholder="Enter the movie's name"
								style={inputStyle}
							/>
							<Button type='submit' style={{ margin: '10px' }} bgColor=' #9658e0 '>
								Search
							</Button>
						</FlexContainer>
					</form>
				</FlexContainer>
			</FlexContainer>
		</Jumbotron>
	);
};

export default SearchBox;
