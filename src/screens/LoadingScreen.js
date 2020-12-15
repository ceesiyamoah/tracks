import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const LoadingScreen = () => {
	const { tryLocalSignIn } = useContext(AuthContext);
	useEffect(() => {
		tryLocalSignIn();
	}, []);
	return null;
};

export default LoadingScreen;
