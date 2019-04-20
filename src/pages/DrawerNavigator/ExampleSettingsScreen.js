import React from 'react';
import { View, Text } from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";

import HeaderComponent from '../../components/HeaderComponent'

const ExampleSettingsScreen = (props) => (
    <View>
        <HeaderComponent navigation={props.navigation} />
        <View style={{ flex: 1, justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
            <Text>Example Settings Screen</Text>
        </View>
    </View>
);

ExampleSettingsScreen.navigationOptions = {

    drawerLabel: 'Example Settings Screen',

    drawerIcon: () => (

        <Icon name="list" size={26} color="#000000" />
  
    ),

}

export default ExampleSettingsScreen;
