import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import Spacer from './../components/Spacer';
import '../_mockLocation';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () => {
	const { state, addLocation } = useContext(LocationContext);
	const { err } = useLocation(addLocation);
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
