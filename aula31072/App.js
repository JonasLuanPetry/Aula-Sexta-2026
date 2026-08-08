import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Cavalo Manco Sírio</Text>
      <Pressable>
      <Text>Leitoa Caolha Chinesa</Text>
      </Pressable>
      <StatusBar style="auto" />
      <Button
      title="Touro Monobola Azteca"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"/>
      <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD">
      <Text>Cabra Pelada Espanhola</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
