import React, { useState, useEffect } from 'react';
import { 
  FlatList, 
  View, 
  Text, 
  ActivityIndicator, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';
import { fetchPosts } from './services/api';
import PostItem from './components/PostItem';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadData = async (pageNum, isRefreshing = false) => {
    try {
      const data = await fetchPosts(pageNum);
      
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setPosts(prev => isRefreshing ? data : [...prev, ...data]);
      }
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setLoadingMore(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData(1);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setPage(1);
    setHasMore(true);
    loadData(1, true);
  };

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      setLoadingMore(true);
      const nextPage = page + 1;
      setPage(nextPage);
      loadData(nextPage);
    }
  };

  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Yükleniyor...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Hata oluştu: {error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <PostItem item={item} />}
        onRefresh={onRefresh}
        refreshing={refreshing}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={
          <View style={styles.center}>
            <Text>Veri bulunamadı.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  footer: {
    paddingVertical: 20
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center'
  }
});