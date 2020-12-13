import React from 'react';
import { Button, Text, View } from 'react-native';

const SigninScreen = ({ navigation }) => {
	return (
		<View>
			<Text>SigninScreen</Text>
			<Button
				title='go to sign up'
				onPress={() => navigation.navigate('Signup')}
			/>
		</View>
	);
};

export default SigninScreen;
