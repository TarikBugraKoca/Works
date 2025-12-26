import { NavigationContainer } from '@react-navigation/native'; // [cite: 73, 83]
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // [cite: 74, 80]
import { AuthProvider, useAuth } from './context/AuthContext'; // [cite: 143, 162]
import LoginScreen from './screens/LoginScreen'; // [cite: 76, 85]
import HomeScreen from './screens/HomeScreen'; // [cite: 77, 86]
import SettingsScreen from './screens/SettingsScreen'; // [cite: 78, 87]
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator();

function Navigation() {
  const { user, loading } = useAuth(); // [cite: 168]

  // Depolama yüklenirken boş ekran yerine yükleniyor ikonu gösterir [cite: 193]
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AuthProvider>
  );
}