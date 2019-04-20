import { Platform, PixelRatio } from 'react-native';

export function getPixelSize(pixels) {

    return Platform.select({
        ios: pixels,
        android: PixelRatio.getPixelSizeForLayoutSize(pixels),
    })

}

export async function getUser() {
	try {
		return await AsyncStorage.getItem('@AppHackathonBoilerplate:user');
	} catch (e) {
		throw e
	}
};

export const storeUser = async user => {
	return AsyncStorage.setItem('@AppHackathonBoilerplate:user', JSON.stringify(user))
};
