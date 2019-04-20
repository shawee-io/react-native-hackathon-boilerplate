import React from 'react';
import { View, Text } from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";

import HeaderComponent from '../../components/HeaderComponent'

const ExampleScreen = (props) => (
    <View>
        <HeaderComponent navigation={props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
            <Text>Example Screen</Text>
        </View>
    </View>
);

ExampleScreen.navigationOptions = {

    drawerLabel: 'Example Screen',

    drawerIcon: () => (

        <Icon name="list" size={26} color="#000000" />
  
    ),

}

export default ExampleScreen;