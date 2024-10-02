// DetailScreen.js
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { newsId, title } = route.params; // Obtém os parâmetros passados da HomeScreen

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Detalhes da {title}</Text>
        <Text>ID da Notícia: {newsId}</Text>
        {/* Aqui você pode renderizar mais detalhes da notícia */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
