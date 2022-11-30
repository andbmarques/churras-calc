import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import chooseScreen from './src/Utils/chooseScreen';

import Onboarding from './src/Pages/Onboarding';
import Home from './src/Pages/Home';
import Calculator from './src/Pages/Calculator';

const Stack = createNativeStackNavigator();

export default function App() {

  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    chooseScreen(setShowOnboarding);
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {showOnboarding === true ? <Stack.Screen name="Onboarding" component={Onboarding} /> : null}
          <Stack.Screen name="Home" component={Home} options={{ gestureEnabled: false }} />
          <Stack.Screen name="Calculator" component={Calculator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}