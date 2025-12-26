import { View, Text, Button, StyleSheet } from 'react-native'; // [cite: 126]
import { useAuth } from '../context/AuthContext'; // [cite: 168]

export default function HomeScreen({ navigation }) {
  const { user } = useAuth(); // [cite: 168]

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {user?.username}!</Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 }
});