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

const switchNavigator = createSwitchNavigator({
	loginFlow: createStackNavigator({
		Signin: SigninScreen,
		Signup: SignupScreen,
	}),
	mainFlow: createBottomTabNavigator({
		TrackCreate: TrackCreateScreen,
		trackListFlow: createStackNavigator({
			TrackDetail: TrackDetailScreen,
			TrackList: TrackListScreen,
		}),
		Account: AccountScreen,
	}),
});

export default createAppContainer(switchNavigator);
