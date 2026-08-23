import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewPrincipal}>
      <View style={styles.cabecalho}>
        <View style={styles.simbololos}></View>
        <View style={styles.instagram}>
          <Text style={styles.porqueetutaolhandoomeucodigoprofessor}>Garotas do X</Text>
        </View>
        <View style={styles.simbololos}></View>
      </View>

      <View style={styles.postsheteros}>
        <View style={styles.esferasdodragao}></View>
        <View style={styles.esferasdodragao}></View>
        <View style={styles.esferasdodragao}></View>
        <View style={styles.esferasdodragao}></View>
      </View>

      <View style={styles.videoneonlaranja}></View>

      <View style={styles.rodabota}>
        <View style={styles.quadradinhodeoito}></View>
        <View style={styles.quadradinhodeoito}></View>
        <View style={styles.quadradinhodeoito}></View>
        <View style={styles.quadradinhodeoito}></View>
        <View style={styles.quadradinhodeoito}></View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "black",
  },

  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  videoneonlaranja: {
  flex: 1,
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 40,
  backgroundColor: "orange",
  marginTop: 20,
  marginHorizontal: 10,
},

  simbololos: {
    width: 40,
    height: 40,
    backgroundColor: "white",
  },

  instagram: {
    width: 150,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  porqueetutaolhandoomeucodigoprofessor: {
    color: "black",
    fontSize: 22, //VOTA VOTA E CONFIA 22 É BOLSONARO
  },

  rodabota: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "black",
  paddingVertical: 15,
},

  quadradinhodeoito: {
  width: 40,
  height: 40,
  backgroundColor: "white",
},

  postsheteros: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  gap: 0,
  marginTop: 30,
},

  esferasdodragao: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "purple",
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
