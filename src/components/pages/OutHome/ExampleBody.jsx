import React from 'react';
import { Text, Box, Container, Header, Bar } from '../../misc/Components';
import { CardDeck } from 'react-bootstrap';
import MovieBox from './MovieBox';

const image01 =
	'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._AC_SY741_.jpg';

const image02 = 'https://movieposters2.com/images/658686-b.jpg';

const image03 =
	'https://lh3.googleusercontent.com/proxy/9YlK2cL7fuWCpGyqERmBkZ07359lFRPJWJowDdc_3vcyvDexkhvK98Uliw_qIZ_y6QU9UAI8PHzMrbLucx-aiCBjW-0OTS5MK9RvPB6EqlR7paXs';

const ExampleBody = () => {
	return (
		<Box width='100vw' height='fit-content' color='#dbdbdb' alignCenter contentCenter>
			<Bar contentCenter alignCenter color='black' height='20vh' column>
				<Header white size='50px'>
					Its simple to find what you looking for
				</Header>
				<Text white>You can save movies you find too</Text>
			</Bar>
			<Container width='50%'>
				<div style={{ marginTop: '20px', marginBottom: '20px' }}>
					<CardDeck>
						<MovieBox
							name='The Avengers'
							image={image01}
							extra='Released: April 27, 2018'
						/>
						<MovieBox
							name='The Bee Movie'
							image={image02}
							extra='Released: November 2, 2007'
						/>
						<MovieBox
							name='Hobbs and Shaw'
							image={image03}
							extra='Released: July 13, 2019'
						/>
					</CardDeck>
				</div>
			</Container>
		</Box>
	);
};

export default ExampleBody;
