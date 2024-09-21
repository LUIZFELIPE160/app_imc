import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

//paginas
import Title from './src/components/Ttitle/index';
import Main from './src/components/Main/index'


export default function App() {
  return (
    <View style={styles.container}>
     <Title/>
     <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff000',
    padding: 8,
  },
});
