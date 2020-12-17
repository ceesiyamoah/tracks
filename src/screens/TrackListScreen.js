import React, { useContext } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';
import { ListItem } from 'react-native-elements';

const TrackListScreen = ({ navigation }) => {
	const { fetchTracks, state } = useContext(TrackContext);

	const renderItem = ({ item }) => (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate('TrackDetail', { id: item._id, name: item.name })
			}
		>
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

TrackListScreen.navigationOptions = () => ({
	title: 'Tracks',
	headerTitleStyle: {
		alignSelf: 'center',
	},
});

export default TrackListScreen;
