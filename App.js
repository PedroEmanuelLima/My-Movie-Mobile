import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/home/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: 50,
    backgroundColor: '#17223b',
  },
});
