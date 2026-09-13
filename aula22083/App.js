import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable, Image, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.viewPrincipal}>
      <Text style={styles.texto}>Olá Mundo!</Text>
      <View style={styles.quadrado}></View>
      <View style={styles.circulo}></View>
      <View style={styles.caixaBorda}>
        <Text>Estou dentro, bem no fundo de uma caixa</Text>
      </View>

      <TextInput style={styles.campo} placeholder="Digite alguma coisa"/>
      <Button title="Clique aqui" onPress={() => alert("Parabéns, você aprendeu a clicar")}/>
      <Pressable style={styles.botao} onPress={() => alert("Funcionou!")}>
        <Text style={styles.textoBotao}>Me aperta com gentileza</Text>
      </Pressable>
      <Image source={require('./assets/icon.png')} style={styles.imagem}/>
      <ScrollView>
        <Text>Parte 1</Text>
        <Text>Parte 2</Text>
        <Text>Parte 3</Text>
        <Text>Parte 4</Text>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "white",
  },

  texto: {
    fontSize: 25,
    color: "purple",
  },

  quadrado: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },

  circulo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "blue",
  },

  caixaBorda: {
    width: 250,
    padding: 20,
    borderWidth: 3,
    borderColor: "purple",
    borderRadius: 15,
  },

  campo: {
    width: 250,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
  },

  botao: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 15,
  },

  textoBotao: {
    color: "white",
    fontSize: 18,
  },

  imagem: {
    width: 150,
    height: 150,
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  bolinha: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "orange",
  },
});

//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
//
//export default function App() {
//  return (
//    <View style={styles.viewPrincipal}>
//      <View style={styles.cabecalho}>
//        <View style={styles.circulo}></View>
//        <View style={styles.viewTextos}>
//          <Text style={{ fontSize: 30, color: "white" }}>Olá, estudante!</Text>
//          <Text style={{color: "white" }}>Boas vindas.</Text>
//        </View>
//      </View>
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  viewPrincipal: {
//    flex: 1,
//    paddingTop: 60,
//    backgroundColor: "black",
//  },

//  circulo: {
//    width: 70,
//    height: 70,
//    borderRadius: 50,
//    backgroundColor: "purple",
//  },
//
//  cabecalho: {
//    gap: 20,
//    flexDirection: "row",
//    marginLeft: 10,
//  },
//
//  viewTextos: {
//    justifyContent: "center",
//  },
//});

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  //},
//});
