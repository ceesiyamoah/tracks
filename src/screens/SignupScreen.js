import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
	const { signup, state } = useContext(AuthContext);

	const [inputDetails, setInputDetails] = useState({ email: '', password: '' });
	return (
		<View style={styles.container}>
			<Spacer>
				<Text h3 style={styles.header}>
					Sign up for Tracker
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
			{state.errorMessage ? (
				<Text style={styles.errorMessage}>{state.errorMessage}</Text>
			) : null}

			<Spacer>
				<Button title='Sign up' onPress={() => signup(inputDetails)} />
			</Spacer>
			<Spacer>
				<Button
					title='Already have an account? Sign In'
					onPress={() => navigation.navigate('Signin')}
				/>
			</Spacer>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
	},
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

SignupScreen.navigationOptions = () => ({
	headerShown: false,
});

export default SignupScreen;
