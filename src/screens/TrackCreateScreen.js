import React, { useEffect, useState } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import Spacer from './../components/Spacer';
import {
	requestPermissionsAsync,
	getCurrentPositionAsync,
} from 'expo-location';

const TrackCreateScreen = () => {
	const [err, setErr] = useState(null);
	const [location, setLocation] = useState({});
	const startWatching = async () => {
		try {
			await requestPermissionsAsync();
			console.log('granted');
		} catch (error) {
			console.log(error);
			setErr(error);
		}
	};
	useEffect(() => {
		startWatching();
	}, []);
	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Spacer>
				<Text h1>Create a track</Text>
			</Spacer>
			<Map />
			{err ? <Text h1>Please enable location</Text> : null}
		</SafeAreaView>
	);
};

export default TrackCreateScreen;
