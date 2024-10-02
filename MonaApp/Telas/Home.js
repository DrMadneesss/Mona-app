// screens/HomeScreen.js
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const newsData = [
    { id: '1', title: 'Notícia 1' },
    { id: '2', title: 'Notícia 2' },
    { id: '3', title: 'Notícia 3' },
    { id: '4', title: 'Notícia 4' },
  ];

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() => navigation.navigate('Details', { newsId: item.id, title: item.title })} // Navega para a tela de detalhes
    >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://ia-seifer-logo-url.com' }} // Substituir com a URL do logo real
          style={styles.logo}
        />
        <TouchableOpacity>
          <MaterialIcons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Slider de notícias (simulação) */}
      <View style={styles.slider}>
        <View style={styles.sliderItem}>
          <Text>Banner de Notícias</Text>
        </View>
        <View style={styles.dotsContainer}>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </View>
      </View>

      {/* Grid de notícias */}
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.newsContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  slider: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    margin: 16,
    borderRadius: 10,
  },
  sliderItem: {
    width: '90%',
    height: '80%',
    backgroundColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333',
    marginHorizontal: 4,
  },
  newsContainer: {
    paddingHorizontal: 16,
  },
  newsItem: {
    flex: 1,
    margin: 8,
    height: 150,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
