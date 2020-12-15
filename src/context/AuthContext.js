import { AsyncStorage } from 'react-native';
import tracker from '../api/tracker';
import { navigate } from '../navigationRef';
import createDataContext from './createDataContext';

const authReducer = (state, { type, payload }) => {
	switch (type) {
		case 'SIGN_UP':
			return { errorMessage: '', token: payload };
		case 'SIGN_IN':
			return { errorMessage: '', token: payload };
		case 'ADD_ERROR':
			return { ...state, errorMessage: payload };

		default:
			return state;
	}
};

const signup = (dispatch) => async (userDetails) => {
	try {
		const { data } = await tracker.post('/signup', { ...userDetails });

		//!Use react-native-async-storage instead
		await AsyncStorage.setItem('token', data.token);
		dispatch({ type: 'SIGN_UP', payload: data.token });
		navigate('mainFlow');
	} catch (error) {
		//!Improve error options
		console.log(error);
		dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
	}
};

const signin = (dispatch) => async (userDetails) => {
	try {
		const token = await AsyncStorage.getItem('token');

		if (!token) {
			const { data } = await tracker.post('/signin', { ...userDetails });
			dispatch({ type: 'SIGN_IN', payload: data.token });
		} else {
			dispatch({ type: 'SIGN_IN', payload: token });
		}
		navigate('mainFlow');
	} catch (error) {
		dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
	}
};

const signout = (dispatch) => () => {};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signup, signin, signout },
	{ token: null, errorMessage: '' }
);
