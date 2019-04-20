import React from 'react';
import { View, Text, Button } from 'react-native';

const handleButton = (navigation) => {
    
    navigation.navigate('ExampleScreen')

}

const ExampleNextScreen = (props) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Example Next Screen</Text>
        <Button title="Back to Example Screen" onPress={() => handleButton(props.navigation)} />
    </View>
);

ExampleNextScreen.navigationOptions = {

    headerTitle: 'Example Next Screen Title'

}

export default ExampleNextScreen;
