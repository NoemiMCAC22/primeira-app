import { StatusBar } from 'expo-status-bar';
import { Alert, Image, ScrollView, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Headers from './src/components/header/header';
import AppButton from './src/components/AppButton/appButton';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Tarefa } from './src/features/tarefas/types';
import TarefasScreen from './src/features/tarefas/TarefasScreen';






export default function App() {
  const nome = 'Noemi';
  const sobrenome = 'Correa';
  //const [contador, setContador] = useState<number>(0);
  const [contador, setContador] = useState(0);
  //const [email, setEmail] = useState('');




  console.log('Contador:', contador);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer}>
        {/* <ScrollView contentContainerStyle={{ alignItems: "center" }} showsVerticalScrollIndicator={false}> */}
        <Headers title="Header Home" subtitle="Bem-vindo ao aplicativo" />
        <View style={{ marginTop: 16, marginBottom: 16, alignItems: 'center' }}>
          <Text style={{ color: '#c251ee', fontSize: 15 }}>Olá <Text style={{ color: '#000000', fontWeight: 'bold' }}>{nome} {sobrenome}!</Text></Text>

          {/* <Text style={{ color: '#000000', fontSize: 15, marginTop: 10 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
        </Text> */}

          <StatusBar style="light" />

          {/* imagem  remota de exemplo */}
          {/* <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: 'https://www.cesaedigital.pt/content/media/ab47fa57-0ce7-4d87-8cca-9a8805b169cf.png' }} /> */}

          {/* imagem local de exemplo */}
          {/* <Image
          resizeMode='contain'
          style={{ width: 150, height: 200 }}
          source={require('./assets/cesae.png')} /> */}
          {/* <Text>Contador: {contador}</Text> */}
          {/* <AppButton
          title="Click Me"
          onPress={() => setContador(contador + 1)} /> */}
        </View>
        <TarefasScreen />
        {/* </ScrollView> */}


      </SafeAreaView>
    </SafeAreaProvider>


  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#62dfdf',
    alignItems: 'center',
  },
});
