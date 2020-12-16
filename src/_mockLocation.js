import * as Location from 'expo-location';

const tenMetresWithDegrees = 0.0001;

const getLocation = (increment) => ({
	coords: {
		accuracy: 28.100000381469727,
		altitude: 89.79999542236328,
		altitudeAccuracy: 2,
		heading: 0,
		latitude: 5.6854423 + increment * tenMetresWithDegrees,
		longitude: -0.1949418 + increment * tenMetresWithDegrees,
		speed: 0,
	},
	timestamp: 1608077332880,
});

let counter = 0;

setInterval(() => {
	Location.EventEmitter.emit('Expo.locationChanged', {
		watchId: Location._getCurrentWatchId(),
		location: getLocation(counter),
	});
	counter++;
}, 1000);
