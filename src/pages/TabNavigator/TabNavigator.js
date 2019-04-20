import React from 'react';

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Icon from "react-native-vector-icons/Feather";

import ExampleScreen from './ExampleScreen'
import ExampleNextScreen from './ExampleNextScreen'
import ExampleSettingsScreen from './ExampleSettingsScreen'

const TabNavigatorExample = createBottomTabNavigator(
	{
		ExampleScreen: {
			screen: ExampleScreen,
			navigationOptions: {
				title: 'Example'
			}
		},
		ExampleNextScreen: {
			screen: ExampleNextScreen,
			navigationOptions: {
				title: 'ExampleNext'
			}
		},
		ExampleSettingsScreen: {
			screen: ExampleSettingsScreen,
			navigationOptions: {
				title: 'ExampleSettings'
			}
		},
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
				let iconName;

				switch (routeName) {
					case 'ExampleScreen':
						iconName = `search`;
						break;
					case 'ExampleNextScreen':
						iconName = `briefcase`;
						break;
					case 'ExampleSettingsScreen':
						iconName = `user`;
						break;
				}

				// You can return any component that you like here! We usually use an
				// icon component from react-native-vector-icons
				return <Icon name={iconName} size={24} color={tintColor} />;
			},
		}),
		initialRouteName: 'ExampleScreen',
		tabBarOptions: {
			activeTintColor: '#7A91CA',
			inactiveTintColor: '#ccc',
			style: {
				backgroundColor: '#FFFFFF',
				// height: metrics.tabBarHeight,
				paddingHorizontal: 20,
				borderColor: '#eee',
			}
		},
	}
);

const TabNavigator = createAppContainer(TabNavigatorExample);

export default TabNavigator