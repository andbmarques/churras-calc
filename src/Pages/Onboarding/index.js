import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { slides } from './slides';
import { styles } from './styles';
import finishOnboarding from '../../Utils/finishOnboarding';

export default function Onboarding({ navigation }) {
  return (
    <AppIntroSlider
      data={slides}
      doneLabel={"Continuar"}
      onDone={() => finishOnboarding(navigation)}
      nextLabel={"Proximo"}
      renderItem={({ item }) => (
        <View style={[styles.container, { backgroundColor: item.backgroundColor }]}>
          <StatusBar hidden={true} />
          <Image source={item.image} style={item.key === 'two' ? [styles.image, { marginBottom: 50 }] : [styles.image]} />
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text} >{item.text}</Text>
          </View>
        </View>
      )}
    />
  );
}

