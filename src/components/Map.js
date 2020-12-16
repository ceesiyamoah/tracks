import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
	const {
		state: { currentLocation, locations },
	} = useContext(LocationContext);

	if (!currentLocation) return <ActivityIndicator size='large' />;

	return (
		<MapView
			style={styles.map}
			initialRegion={{
				latitude: locations[0].latitude,
				longitude: locations[0].longitude,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
			region={{
				latitude: locations[0].latitude,
				longitude: locations[0].longitude,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
		>
			<Polyline coordinates={locations} strokeWidth={3} />
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});

export default Map;
