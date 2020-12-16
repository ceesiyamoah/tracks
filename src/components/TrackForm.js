import React, { useContext } from 'react';
import { Button, Input, Text } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
	const {
		state: { name, recording },
		startRecording,
		stopRecording,
		changeName,
		locations,
	} = useContext(LocationContext);

	return (
		<>
			<Input placeholder='Enter name' value={name} onChangeText={changeName} />
			{recording ? (
				<Button title='Stop recording' onPress={stopRecording} />
			) : (
				<Button title='Record' onPress={startRecording} />
			)}
		</>
	);
};

export default TrackForm;
