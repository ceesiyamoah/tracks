import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ({}) => {
	const { signin, state, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillBlur={clearErrorMessage} />
			<AuthForm
				HeaderText='Sign in'
				onSubmit={signin}
				errorMessage={state.errorMessage}
			/>
			<Spacer>
				<NavLink to='Signup' text="Don't have an account? Sign up" />
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

SigninScreen.navigationOptions = () => ({
	headerShown: false,
});

export default SigninScreen;
