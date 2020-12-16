import React, { useEffect, useState } from 'react';
import {
	Accuracy,
	requestPermissionsAsync,
	watchPositionAsync,
} from 'expo-location';

const useLocation = (shouldTrack, callback) => {
	const [err, setErr] = useState(null);
	const [subscriber, setSubscriber] = useState(null);

	const startWatching = async () => {
		try {
			await requestPermissionsAsync();
			const sub = await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation,
					timeInterval: 1000,
					distanceInterval: 10,
				},
				(location) => {
					callback(location);
				}
			);
			setSubscriber(sub);
		} catch (error) {
			console.log(error);
			setErr(error);
		}
	};
	useEffect(() => {
		if (shouldTrack) {
			startWatching();
		} else {
			subscriber.remove();
			setSubscriber(null);
		}
	}, [shouldTrack]);

	return { err };
};

export default useLocation;