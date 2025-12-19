import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PostItem = ({ item }) => {
  const imageUrl = `https://picsum.photos/seed/${item.id}/200`;

  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: imageUrl }} 
        style={styles.image} 
      />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body} numberOfLines={2}>{item.body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#f0f0f0'
  },
  info: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  body: {
    fontSize: 14,
    color: '#666',
    marginTop: 4
  }
});

export default PostItem;