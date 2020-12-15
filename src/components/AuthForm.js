import React, { useState } from 'react';
import Spacer from './Spacer';
import { StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';

const AuthForm = ({ HeaderText, onSubmit, errorMessage }) => {
	const [inputDetails, setInputDetails] = useState({ email: '', password: '' });

	return (
		<>
			<Spacer>
				<Text h1 style={styles.header}>
					{HeaderText} to Tracker
				</Text>
			</Spacer>

			<Input
				label='Email'
				value={inputDetails.email}
				onChangeText={(newValue) =>
					setInputDetails({ ...inputDetails, email: newValue })
				}
				autoCapitalize='none'
				autoCorrect={false}
			/>
			<Spacer />
			<Input
				label='Password'
				value={inputDetails.password}
				onChangeText={(newValue) =>
					setInputDetails({ ...inputDetails, password: newValue })
				}
				autoCapitalize='none'
				autoCorrect={false}
				secureTextEntry
			/>
			{errorMessage ? (
				<Text style={styles.errorMessage}>{errorMessage}</Text>
			) : null}

			<Spacer>
				<Button title={HeaderText} onPress={() => onSubmit(inputDetails)} />
			</Spacer>
		</>
	);
};

const styles = StyleSheet.create({
	header: {
		textAlign: 'center',
		marginBottom: 50,
	},
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginLeft: 10,
	},
});

export default AuthForm;
