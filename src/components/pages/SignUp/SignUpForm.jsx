import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { Button, InputBox, FlexContainer, Text, Header } from '../../misc/Components';
import useInput from '../../hooks/useInput';
import useAuth from '../../hooks/useAuth';

const Email = {
	padding: '20px',
	paddingLeft: 0,
};

const Password = {
	padding: '20px',
	paddingLeft: 0,
	paddingTop: '10px',
};

const SignUpForm = () => {
	const [email, bindEmail] = useInput('');
	const [password, bindPassword] = useInput('');
	const [CreateUser, SignIn, errorMessage] = useAuth(email, password);

	const handleSubmit = (e) => {
		e.preventDefault();
		CreateUser(email, password);
	};

	return (
		<Form style={{ padding: '30px', marginRight: '150px' }} onSubmit={handleSubmit}>
			<FlexContainer column>
				<Header size='30px'>Sign Up</Header>
				<FlexContainer alignLeft contentCenter column style={Email}>
					<Text>Email</Text>
					<InputBox
						placeholder='Enter you Email'
						softBorder
						{...bindEmail}
						width='150%'
					/>
				</FlexContainer>
				<FlexContainer alignLeft contentCenter column style={Password}>
					<Text>Password</Text>
					<InputBox
						type='password'
						placeholder='Enter you Password'
						softBorder
						{...bindPassword}
						width='150%'
					/>
				</FlexContainer>
				{errorMessage && <Text color='red'>{errorMessage}</Text>}
				<Button type='submit'>Submit</Button>
			</FlexContainer>
		</Form>
	);
};

export default SignUpForm;
