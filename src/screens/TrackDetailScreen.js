import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import Spacer from './../components/Spacer';

const TrackDetailScreen = ({ navigation }) => {
	const { state } = useContext(TrackContext);
	const track = state.find((item) => item._id === navigation.getParam('id'));
	console.log(track.locations[0].coords.latitude);

	return (
		<>
			<Spacer>
				<MapView
					style={styles.map}
					region={{
						latitude: track.locations[0].coords.latitude,
						longitude: track.locations[0].coords.longitude,
						longitudeDelta: 0.01,
						latitudeDelta: 0.01,
					}}
					intialRegion={{
						latitude: track.locations[0].coords.latitude,
						longitude: track.locations[0].coords.longitude,
						longitudeDelta: 0.01,
						latitudeDelta: 0.01,
					}}
				>
					<Polyline
						coordinates={track.locations.map(({ coords }) => ({
							latitude: coords.latitude,
							longitude: coords.longitude,
						}))}
					/>
				</MapView>
			</Spacer>
		</>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
	header: {
		textAlign: 'center',
	},
});

TrackDetailScreen.navigationOptions = ({ navigation }) => ({
	title: navigation.getParam('name'),
});

export default TrackDetailScreen;
