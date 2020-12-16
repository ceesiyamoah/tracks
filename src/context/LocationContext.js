import createDataContext from './createDataContext';

const locationReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_CURRENT_LOCATION':
			return {
				...state,
				currentLocation: {
					latitude: payload.coords.latitude,
					longitude: payload.coords.longitude,
				},
			};
		case 'START_RECORDING':
			return { ...state, recording: true };
		case 'STOP_RECORDING':
			return { ...state, recording: false };
		case 'ADD_TO_LOCATIONS':
			return {
				...state,
				locations: [
					...state.locations,
					{
						latitude: payload.coords.latitude,
						longitude: payload.coords.longitude,
					},
				],
			};

		case 'CHANGE_NAME':
			return { ...state, name: payload };
		default:
			return state;
	}
};

const addLocation = (dispatch) => (location, recording) => {
	dispatch({ type: 'ADD_CURRENT_LOCATION', payload: location });
	if (recording) {
		dispatch({ type: 'ADD_TO_LOCATIONS', payload: location });
	}
};

const startRecording = (dispatch) => () => {
	dispatch({ type: 'START_RECORDING' });
};
const stopRecording = (dispatch) => () => {
	dispatch({ type: 'STOP_RECORDING' });
};

const changeName = (dispatch) => (name) => {
	dispatch({ type: 'CHANGE_NAME', payload: name });
};

export const { Context, Provider } = createDataContext(
	locationReducer,
	{ addLocation, startRecording, stopRecording, changeName },
	{ name: '', currentLocation: null, locations: [], recording: false }
);
