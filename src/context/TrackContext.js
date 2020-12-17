import tracker from '../api/tracker';
import createDataContext from './createDataContext';

const trackReducer = (state, { type, payload }) => {
	switch (type) {
		case 'GET_TRACKS':
			return [...payload];

		default:
			return state;
	}
};

const fetchTracks = (dispatch) => async () => {
	try {
		const { data } = await tracker.get('/tracks');
		dispatch({ type: 'GET_TRACKS', payload: data });
	} catch (error) {}
};

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
