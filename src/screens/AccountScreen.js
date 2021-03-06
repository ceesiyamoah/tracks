import React, { useContext } from 'react';
import { Platform } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AccountScreen = () => {
	const { logout } = useContext(AuthContext);
	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Spacer>
				<Button title='Logout' onPress={logout} />
			</Spacer>
		</SafeAreaView>
	);
};

AccountScreen.navigationOptions = () => ({
	tabBarIcon: <MaterialCommunityIcons name='account' size={24} color='black' />,
});

export default AccountScreen;
