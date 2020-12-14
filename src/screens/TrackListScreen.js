import React from 'react';
import { Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
	return (
		<>
			<Text>TrackListScreen</Text>
			<Button
				title='go to detail'
				onPress={() => navigation.navigate('TrackDetail')}
			/>
		</>
	);
};

export default TrackListScreen;
