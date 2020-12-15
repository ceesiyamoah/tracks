import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
	const points = [];
	for (let i = 0; i < 20; i++)
		points.push({
			latitude: 5.685651951377082 + i * 0.001,
			longitude: -0.19479612257735465 + i * 0.001,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		});
	return (
		<MapView
			style={styles.map}
			initialRegion={{
				latitude: 5.685651951377082,
				longitude: -0.19479612257735465,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
		>
			<Polyline coordinates={points} strokeWidth={6} />
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});

export default Map;
