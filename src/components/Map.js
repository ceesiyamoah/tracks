import React, { useContext, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
	const {
		state: { currentLocation, locations },
	} = useContext(LocationContext);
	if (!currentLocation) return <ActivityIndicator size='large' />;
	console.log('locations', locations);
	return (
		<MapView
			style={styles.map}
			initialRegion={{
				latitude: 5.685651951377082,
				longitude: -0.19479612257735465,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
			region={{
				latitude: 5.685651951377082,
				longitude: -0.19479612257735465,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
		>
			<Circle
				center={{
					latitude: currentLocation.latitude,
					longitude: currentLocation.longitude,
				}}
				radius={30}
				fillColor='rgba(120,128,255,0.3)'
				strokeColor='rgba(120,128,255,1)'
			/>

			<Polyline
				coordinates={locations.map((loc) => loc.coords)}
				strokeWidth={3}
			/>
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});

export default Map;
