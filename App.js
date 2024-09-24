import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

//paginas
import Title from './src/components/Ttitle/index';
import Form from './src/components/Form/index'


export default function App() {
  return (
    <View style={styles.container}>
     <Title/>
     <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666666',
    paddingTop: 80,
  },
});
