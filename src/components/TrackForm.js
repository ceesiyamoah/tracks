import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer';
import { useSaveTrack } from './../hooks/useSaveTrack';

const TrackForm = () => {
	const {
		state: { name, recording, locations },
		startRecording,
		stopRecording,
		changeName,
	} = useContext(LocationContext);
	const [saveTrack] = useSaveTrack();
	return (
		<>
			<Input placeholder='Enter name' value={name} onChangeText={changeName} />
			<Spacer>
				{recording ? (
					<Button title='Stop recording' onPress={stopRecording} />
				) : (
					<Button title='Record' onPress={startRecording} />
				)}
			</Spacer>
			<Spacer>
				{name && locations.length && !recording ? (
					<Button title='Submit track' onPress={saveTrack} />
				) : null}
			</Spacer>
		</>
	);
};

export default TrackForm;
