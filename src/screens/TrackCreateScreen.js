import React, { useCallback, useContext } from 'react';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import Spacer from './../components/Spacer';
import '../_mockLocation';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from './../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
	const {
		state: { recording },
		addLocation,
	} = useContext(LocationContext);
	const callback = useCallback(
		(location) => {
			addLocation(location, recording);
		},
		[recording]
	);
	const { err } = useLocation(isFocused || recording, callback);
	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Spacer>
				<Text h1>Create a track</Text>
			</Spacer>
			<Map />
			{err ? <Text h1>Please enable location</Text> : null}
			<Spacer>
				<TrackForm />
			</Spacer>
		</SafeAreaView>
	);
};

export default withNavigationFocus(TrackCreateScreen);
