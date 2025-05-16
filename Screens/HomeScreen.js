import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, StatusBar, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const handleOpenForm = () => {
    Linking.openURL('https://forms.gle/gC6cSvuYmwMBm1eW8');
  };

  const handleOpenCarregamentoForm = () => {
    Linking.openURL('https://forms.gle/e96SPgm4JqNE6sPUA');
  };

  const handleOpenSalaNobreForm = () => {
    Linking.openURL('https://forms.gle/7WUcSYFUDcNqK8Vu9');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Relatórios de Sobras e Separação</Text>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={handleOpenCarregamentoForm}
        >
          <View style={styles.iconContainer}>
            <MaterialIcons name="local-shipping" size={28} color="#FFFFFF" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>Sobras de Carregamento</Text>
            <Text style={styles.cardSubtext}>Acessar formulário de sobras</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#E8F5E9" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={handleOpenSalaNobreForm}
        >
          <View style={styles.iconContainer}>
            <MaterialIcons name="meeting-room" size={28} color="#FFFFFF" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>Sobras da Sala Nobre</Text>
            <Text style={styles.cardSubtext}>Acessar formulário de sobras</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#E8F5E9" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={handleOpenForm}
        >
          <View style={styles.iconContainer}>
            <MaterialIcons name="description" size={28} color="#FFFFFF" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>Separação de carrinhos(Entrega)</Text>
            <Text style={styles.cardSubtext}>Acessar formulário google</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#E8F5E9" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 48,
    paddingHorizontal: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2E7D32',
    textAlign: 'center',
  },
  cardsContainer: {
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: '100%',
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#1B5E2040',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  iconContainer: {
    backgroundColor: '#4CAF50',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  cardText: {
    fontSize: 16,
    color: '#212121',
    fontWeight: '600',
  },
  cardSubtext: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
  },
});