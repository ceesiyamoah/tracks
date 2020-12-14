import tracker from '../api/tracker';
import createDataContext from './createDataContext';

const authReducer = (state, { type, payload }) => {
	switch (type) {
		case 'SIGN_UP':
			return { ...state, token: payload };

		default:
			return state;
	}
};

const signup = (dispatch) => async (userDetails) => {
	try {
		const { data } = await tracker.post('/signup', { ...userDetails });
		console.log(data.token);
		dispatch({ type: 'SIGN_UP', payload: data.token });
	} catch (error) {
		console.log(error);
	}
};

const signin = (dispatch) => (userDetails) => {
	//call api and get token
};

const signout = (dispatch) => () => {};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signup, signin, signout },
	{ isSignedIn: false }
);
