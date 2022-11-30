import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
  {
    key: 'one',
    title: 'Dia de churras!',
    text: 'Já te ocorreu bem no meio do seu churrasco\nfaltar carne para os convidados e/ou \na família? O ChurrasCalc te ajuda com isso!',
    image: require('../../Assets/1.png'),
    backgroundColor: '#003049',
  },
  {
    key: 'two',
    title: 'A quantidade certa!',
    text: 'Ache a medida certa para seu churras!\nSem desperdicio, sem falta, sem surpresas.',
    image: require('../../Assets/2.png'),
    backgroundColor: '#F77F00',
  },
  {
    key: 'three',
    title: 'Chega de enrolação!',
    text: 'Depois de saber as vantagens do ChurrasCalc\napenas vendo para se convencer ainda mais.\nClique em Continuar e desfrute da nossa ferramenta!\n\nBom Churras! :)',
    image: require('../../Assets/3.png'),
    backgroundColor: '#D62828',
  }
];

export default function Onboarding({ navigation }) {

  const finishOnboarding = async (navigation) => {

    try {

      const jsonValue = JSON.stringify({ firstTime: false })
      await AsyncStorage.setItem('@FirstTime', jsonValue)
      console.log(jsonValue)

    } catch (e){
      console.log(e);
    }

    navigation.navigate('Home');
  }
  
  return (
    <AppIntroSlider
      data={slides}
      doneLabel={"Continuar"}
      onDone={() => finishOnboarding(navigation)}
      nextLabel={"Proximo"}
      renderItem={({ item }) => (
        <View style={[styles.container, { backgroundColor: item.backgroundColor }]}>
          <StatusBar hidden={true} />
          <Image source={item.image} style={ item.key === 'two' ? [styles.image, { marginBottom: 50 }] : [styles.image]} />
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text} >{item.text}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  content: {
    alignItems: 'center',
    marginBottom: 40
  },
  title: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center'
  },
  image: {
    height: 350,
    width: 300,
    marginBottom: 10
  }
});
