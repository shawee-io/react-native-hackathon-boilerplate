import React from 'react';
import { Text, View, Button } from 'react-native';

const handleButton = (navigation) => {
    
    navigation.navigate('ExampleNextScreen')

}

const ExampleScreen = (props) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Example Screen</Text>
        <Button title="Go to Next Screen" onPress={() => handleButton(props.navigation)} />
    </View>
);

ExampleScreen.navigationOptions = {

    headerTitle: 'Example Screen Title'

}

export default ExampleScreen;
