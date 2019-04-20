import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation'

import ExampleScreen from './ExampleScreen'
import ExampleNextScreen from './ExampleNextScreen'
import ExampleSettingsScreen from './ExampleSettingsScreen'

import React from 'React'
import { View, Dimensions, TouchableOpacity } from 'react-native'

const { height, width } = Dimensions.get('window')

const customDrawerContentComponent = (props) => (

    <View>
  
    	<DrawerItems {...props} />
    
    </View>
  
)

const DrawerNavigatorExample = createDrawerNavigator(

	{
        ExampleScreen: { screen: ExampleScreen },
        ExampleNextScreen: { screen: ExampleNextScreen },
    	ExampleSettingsScreen: { screen: ExampleSettingsScreen },
	},
	{

		drawerWidth: width / 1.5,
		drawerPosition: 'left',
		contentComponent: customDrawerContentComponent,
		drawerOpenRoute: 'DrawerOpen',
		drawerCloseRoute: 'DrawerClose',
		drawerToggleRoute: 'DrawerToggle',

		contentOptions: {
		  activeTintColor: 'black',
		},


	}
);

const DrawerNavigator = createAppContainer(DrawerNavigatorExample);

export default DrawerNavigator