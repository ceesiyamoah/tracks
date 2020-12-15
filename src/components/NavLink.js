import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const NavLink = ({ to, text, navigation }) => {
	return (
		<>
			<TouchableOpacity onPress={() => navigation.navigate(to)}>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		</>
	);
};

const styles = StyleSheet.create({
	link: {
		alignSelf: 'center',
		color: 'blue',
	},
});
export default withNavigation(NavLink);
