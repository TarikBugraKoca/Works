import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Guide Home</Text>
      <Button
        title="Go to Paris"
        onPress={() => navigation.navigate('Details', { place: 'Paris', rating: 5 })}
      />
      <Button
        title="Go to London"
        onPress={() => navigation.navigate('Details', { place: 'London', rating: 4 })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});