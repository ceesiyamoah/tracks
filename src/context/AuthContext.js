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

const signUp = (dispatch) => async (userDetails) => {
	try {
		const { data } = await tracker.post('/signin', { userDetails });
		console.log(data);
		//dispatch({type:'SIGN_UP', payload:token})
	} catch (error) {}
};

const signIn = (dispatch) => (userDetails) => {
	//call api and get token
};

const signOut = (dispatch) => () => {};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signUp, signIn, signOut },
	{ isSignedIn: false }
);
