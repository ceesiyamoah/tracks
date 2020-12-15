import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = () => {
	const { signup, state, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillBlur={clearErrorMessage} />
			<AuthForm
				HeaderText='Sign up'
				onSubmit={signup}
				errorMessage={state.errorMessage}
			/>
			<Spacer>
				<NavLink to='Signin' text='Already have an account? Sign in' />
			</Spacer>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
	},
});

SignupScreen.navigationOptions = () => ({
	headerShown: false,
});

export default SignupScreen;
