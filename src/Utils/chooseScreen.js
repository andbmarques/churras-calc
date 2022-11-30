import AsyncStorage from "@react-native-async-storage/async-storage";

const chooseScreen = async (func) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@FirstTime');
        const result = JSON.parse(jsonValue);
        func(result.firstTime);
    } catch (e) {

    }
}

export default chooseScreen;