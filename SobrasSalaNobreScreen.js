import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function SobrasSalaNobreScreen() {
  const [formData, setFormData] = useState({
    horaSobra: '',
    codigoMarca: '',
    isVolume: false,
    conteudoVolume: '',
    outros: ''
  });

  // Atualiza a hora automaticamente
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      });
      setFormData(prev => ({...prev, horaSobra: formattedTime}));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000); // Atualiza a cada minuto
    
    return () => clearInterval(interval);
  }, []);

  const handleChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleSubmit = () => {
    const submissionData = {
      ...formData,
      conteudoVolume: formData.isVolume ? formData.conteudoVolume : null,
      outros: !formData.isVolume ? formData.outros : null
    };
    console.log('Dados enviados:', submissionData);
    alert('Registro salvo com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Registro de Sobras - Sala Nobre</Text>
      
      <View style={styles.card}>
        {/* Campo Hora */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Hora da Sobra</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons name="access-time" size={20} color="#4CAF50" style={styles.inputIcon} />
            <TextInput
              style={[styles.input, styles.disabledInput]}
              value={formData.horaSobra}
              editable={false}
            />
          </View>
        </View>

        {/* Campo Código/Marca */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Código(Do item)/Marca(Do pedido)</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons name="tag" size={20} color="#4CAF50" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={formData.codigoMarca}
              onChangeText={(text) => handleChange('codigoMarca', text)}
              placeholder="Bipe o código/marca do pedido"
              placeholderTextColor="#9E9E9E"
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Informações de sobra</Text>

        {/* Opção Volume */}
        <View style={styles.optionCard}>
          <View style={styles.switchContainer}>
            <Text style={styles.optionLabel}>Volume</Text>
            <Switch
              value={formData.isVolume}
              onValueChange={(value) => handleChange('isVolume', value)}
              trackColor={{ false: '#E0E0E0', true: '#81C784' }}
              thumbColor={formData.isVolume ? '#4CAF50' : '#F5F5F5'}
            />
          </View>
          
          {formData.isVolume && (
            <View style={styles.inputContainer}>
              <MaterialIcons name="inventory" size={20} color="#4CAF50" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={formData.conteudoVolume}
                onChangeText={(text) => handleChange('conteudoVolume', text)}
                placeholder="Conteúdo do volume"
                placeholderTextColor="#9E9E9E"
              />
            </View>
          )}
        </View>

        {/* Opção Outros */}
        {!formData.isVolume && (
          <View style={styles.optionCard}>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <MaterialIcons 
                name="description" 
                size={20} 
                color="#4CAF50" 
                style={[styles.inputIcon, { marginTop: 10 }]} 
              />
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.outros}
                onChangeText={(text) => handleChange('outros', text)}
                placeholder="Detalhes sobre a sobra"
                placeholderTextColor="#9E9E9E"
                multiline
                textAlignVertical="top"
              />
            </View>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>SALVAR SOBRA</Text>
        <MaterialIcons name="save" size={20} color="#FFFFFF" style={styles.buttonIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#1B5E2040',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  formGroup: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#424242',
    marginBottom: 16,
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#424242',
    marginLeft: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  textAreaContainer: {
    alignItems: 'flex-start',
    minHeight: 100,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#212121',
    includeFontPadding: false,
  },
  disabledInput: {
    backgroundColor: '#FAFAFA',
    color: '#757575',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 10,
    verticalAlign: 'top',
  },
  optionCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E8F5E9',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  optionLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#424242',
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#2E7D32',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  buttonIcon: {
    marginLeft: 8,
  },
});
