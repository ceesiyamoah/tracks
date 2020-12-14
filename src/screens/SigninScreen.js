import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';

import Spacer from '../components/Spacer';

const SigninScreen = ({ navigation }) => {
	const [inputDetails, setInputDetails] = useState({ email: '', password: '' });
	return (
		<View style={styles.container}>
			<Spacer>
				<Text h3 style={styles.header}>
					Sign in for Tracker
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
			<Spacer>
				<Button title='Sign in' onPress={() => console.log(inputDetails)} />
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
});

SigninScreen.navigationOptions = () => ({
	headerShown: false,
});

export default SigninScreen;
