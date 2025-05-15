import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('SobrasCarregamento')}
        >
          <View style={styles.iconContainer}>
            <MaterialIcons name="local-shipping" size={32} color="#FFFFFF" />
          </View>
          <Text style={styles.cardText}>Sobras do Carregamento</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('SobrasSalaNobre')}
        >
          <View style={styles.iconContainer}>
            <MaterialIcons name="meeting-room" size={32} color="#FFFFFF" />
          </View>
          <Text style={styles.cardText}>Sobras da Sala Nobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  cardsContainer: {
    width: '100%',
    maxWidth: 400,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 16,
    width: '100%',
    marginBottom: 24,
    elevation: 8,
    shadowColor: '#00000040',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  iconContainer: {
    backgroundColor: '#2E7D32',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
    flex: 1,
  },
});
