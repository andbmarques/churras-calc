import AsyncStorage from "@react-native-async-storage/async-storage";

const finishOnboarding = async (navigation) => {
    try {
        const jsonValue = JSON.stringify({ firstTime: false });
        await AsyncStorage.setItem('@FirstTime', jsonValue);
    } catch (e) {
        console.log(e);
    }
    navigation.navigate('Home');
}

export default finishOnboarding;