import { createStackNavigator, createAppContainer } from "react-navigation";

import ExampleScreen from "./ExampleScreen";
import ExampleNextScreen from "./ExampleNextScreen"

const StackNavigatorExample = createStackNavigator(
	{

		ExampleScreen: { screen: ExampleScreen },
		ExampleNextScreen: { screen: ExampleNextScreen },

	},
	{

		initialRouteName: 'ExampleScreen',
		
	}
);

const StackNavigator = createAppContainer(StackNavigatorExample);

export default StackNavigator
