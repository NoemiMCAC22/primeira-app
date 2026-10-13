import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Headers from './src/components/header/header';
import AppButton from './src/components/AppButton/appButton';

export default function App() {
  const nome = 'Noemi';
  const sobrenome = 'Correa';


  return (
    <View style={styles.mainContainer}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <Headers title="Header Home" subtitle="Sistema de rega automática" />
      <View style={{ borderWidth: 2, borderColor: '#000000', padding: 2, borderRadius: 2 }}>
        <Text style={{ color: '#c251ee', fontSize: 30 }}>Olá <Text style={{ color: '#000000', fontWeight: 'bold' }}>{nome} {sobrenome}!</Text></Text>
        <Text style={{ color: '#000000', fontSize: 20, marginTop: 10 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
        </Text>        
        <StatusBar style="auto" />

        {/* imagem  remota de exemplo */}
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: 'https://www.cesaedigital.pt/content/media/ab47fa57-0ce7-4d87-8cca-9a8805b169cf.png' }} />

        {/* imagem local de exemplo */}
        <Image
          resizeMode='contain'
          style={{ width: 150, height: 200 }}
          source={require('./assets/cesae.png')} />          
      </View>
      {/* </ScrollView> */}
      <AppButton />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#21f1d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
