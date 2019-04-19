import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Welcome = (props) => (
    <View>
        <Text>Welcome</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Camera')}>
            <Text>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('MapsScreen')}>
            <Text>Maps</Text>
        </TouchableOpacity>
    </View>
);

export default Welcome;
