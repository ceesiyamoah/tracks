import tracker from '../api/tracker';
import createDataContext from './createDataContext';

const trackReducer = (state, { type, payload }) => {
	switch (type) {
		case value:
			break;

		default:
			return state;
	}
};

const fetchTracks = (dispatch) => async () => {};

const createTrack = (dispatch) => async (name, locations) => {
	try {
		await tracker.post('/tracks', { name, locations });
	} catch (error) {
		console.log(error);
	}
};

export const { Context, Provider } = createDataContext(
	trackReducer,
	{ fetchTracks, createTrack },
	[]
);
