import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
	loginFlow: createStackNavigator({
		Signin: SigninScreen,
		Signup: SignupScreen,
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow: createStackNavigator({
			TrackList: TrackListScreen,
			TrackDetail: TrackDetailScreen,
		}),
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen,
	}),
});

const App = createAppContainer(switchNavigator);

export default () => (
	<AuthProvider>
		<App ref={(navigator) => setNavigator(navigator)} />
	</AuthProvider>
);
