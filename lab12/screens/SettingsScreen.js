import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext'; // [cite: 168]
import { useTheme } from '../hooks/useTheme'; // [cite: 204]

export default function SettingsScreen() {
  const { logout } = useAuth(); // [cite: 169]
  const { theme, toggleTheme } = useTheme(); // [cite: 216]

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#fff' : '#333' }]}>
      <Text style={{ color: theme === 'light' ? '#000' : '#fff', fontSize: 18 }}>
        Current Theme: {theme.toUpperCase()}
      </Text>
      <View style={{ marginVertical: 10 }}>
        <Button title="Toggle Theme" onPress={toggleTheme} />
      </View>
      <Button title="Logout" color="red" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});