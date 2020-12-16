import createDataContext from './createDataContext';

const locationReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_LOCATION':
			return {
				...state,
				currentLocation: payload,
				locations: [
					...state.locations,
					{
						latitude: payload.coords.latitude,
						longitude: payload.coords.longitude,
					},
				],
			};
		default:
			return state;
	}
};

const addLocation = (dispatch) => (location) => {
	dispatch({ type: 'ADD_LOCATION', payload: location });
};

export const { Context, Provider } = createDataContext(
	locationReducer,
	{ addLocation },
	{ currentLocation: null, locations: [], recording: false }
);
