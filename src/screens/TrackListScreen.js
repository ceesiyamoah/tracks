import React, { useContext } from 'react';
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';
import { ListItem, Text } from 'react-native-elements';

const TrackListScreen = ({ navigation }) => {
	const { fetchTracks, state } = useContext(TrackContext);

	const renderItem = ({ item }) => (
		<TouchableOpacity>
			<ListItem chevron title={item.name} />
		</TouchableOpacity>
	);

	if (!state) {
		return <ActivityIndicator size='large' />;
	}
	return (
		<>
			<NavigationEvents onWillFocus={fetchTracks} />
			<FlatList
				data={state}
				keyExtractor={(item) => item._id}
				renderItem={renderItem}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	names: {
		fontSize: 20,
		margin: 10,
		textAlign: 'center',
	},
});

export default TrackListScreen;
