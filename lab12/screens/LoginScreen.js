import { useState } from 'react'; // [cite: 101]
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'; // [cite: 102]
import { useAuth } from '../context/AuthContext'; // [cite: 168]

export default function LoginScreen() {
  const [username, setUsername] = useState(''); // [cite: 103, 106]
  const { login } = useAuth(); // [cite: 169]

  const handleLogin = () => {
    if (!username.trim()) return; // [cite: 104, 105]
    login(username); // [cite: 169]
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 20 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 5 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' }
});