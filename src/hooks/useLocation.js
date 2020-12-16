import React, { useEffect, useState } from 'react';
import {
	Accuracy,
	requestPermissionsAsync,
	watchPositionAsync,
} from 'expo-location';

const useLocation = (addLocation) => {
	const [err, setErr] = useState(null);

	const startWatching = async () => {
		try {
			await requestPermissionsAsync();
			await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation,
					timeInterval: 1000,
					distanceInterval: 10,
				},
				(location) => {
					addLocation(location);
				}
			);
		} catch (error) {
			console.log(error);
			setErr(error);
		}
	};
	useEffect(() => {
		startWatching();
	}, []);

	return { err };
};

export default useLocation;
