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
import LoadingScreen from './src/screens/LoadingScreen';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { Feather } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
	TrackList: TrackListScreen,
	TrackDetail: TrackDetailScreen,
});

trackListFlow.navigationOptions = () => ({
	title: 'Tracks',
	tabBarIcon: <Feather name='list' size={24} color='black' />,
});

const switchNavigator = createSwitchNavigator(
	{
		Loading: LoadingScreen,
		loginFlow: createStackNavigator({
			Signin: SigninScreen,
			Signup: SignupScreen,
		}),
		mainFlow: createBottomTabNavigator({
			trackListFlow,
			TrackCreate: TrackCreateScreen,
			Account: AccountScreen,
		}),
	},
	{ initialRouteName: 'Loading' }
);

const App = createAppContainer(switchNavigator);

export default () => (
	<TrackProvider>
		<LocationProvider>
			<AuthProvider>
				<App ref={(navigator) => setNavigator(navigator)} />
			</AuthProvider>
		</LocationProvider>
	</TrackProvider>
);
