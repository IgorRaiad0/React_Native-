// App.js

import React from 'react';
import { StyleSheet, View } from 'react-native';

// Importe o novo componente do Desafio 2
import StyledText from './src/components/StyledText';
// Você pode manter a importação do ProfileCard se quiser exibir os dois
import ProfileCard from './src/components/ProfileCard';


export default function App() {
  return (
    <View style={styles.screen}>
      
      
      <ProfileCard 
        name="Ada Lovelace" 
        description="Primeira Programadora da História" 
      /> 

<ProfileCard 
        name="Igor Ryan" 
        description="Estudante de ADS" 
      /> 

      <StyledText />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20, // Adiciona um espaçamento nas laterais
  },
});