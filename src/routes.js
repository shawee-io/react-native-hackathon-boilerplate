import { createStackNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";

// import Information from "./pages/Information/Information";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MapsScreen from "./pages/Maps";
import Camera from "./pages/Camera";
import CameraQRCode from "./pages/CameraQRCode";
import StackNavigator from "./pages/StackNavigator";
import DrawerNavigator from "./pages/DrawerNavigator";
import TabNavigator from "./pages/TabNavigator";
import Welcome from "./pages/Welcome";
import AuthLoadingScreen from "./pages/AuthLoadingScreen";

const AppStack = createStackNavigator(
	{
		Camera: { screen: Camera },
		CameraQRCode: { screen: CameraQRCode },
		MapsScreen: { screen: MapsScreen },
		StackNavigator: { screen: StackNavigator },
		DrawerNavigator: { screen: DrawerNavigator },
		TabNavigator: { screen: TabNavigator },
		Welcome: { screen: Welcome },
	},
	{
		initialRouteName: 'Welcome',
		headerMode: 'none',
		navigationOptions: {
			header: null
		}
	}
);

const AppStackContainer = createAppContainer(AppStack);

const AuthStack = createStackNavigator(
	{
		SignIn: Login,
		App: AppStackContainer,
		SignUp: Register
	},
	{
		initialRouteName: 'SignIn',
		headerMode: 'none',
		header: null
	}
);

const AuthStackContainer = createAppContainer(AuthStack);

const RootStack = createSwitchNavigator(
	{
		AuthLoading: { screen: AuthLoadingScreen },
		App: { screen: AppStackContainer },
		Auth: { screen: AuthStackContainer }
	},
	{
		initialRouteName: 'AuthLoading',
		headerMode: 'none',
		navigationOptions: {
			header: null
		}
	}
);

const RootStackContainer = createAppContainer(RootStack);

export default RootStackContainer
