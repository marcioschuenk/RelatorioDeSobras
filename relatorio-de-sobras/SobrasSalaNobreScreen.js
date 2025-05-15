import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch, CheckBox } from 'react-native';

export default function SobrasSalaNobreScreen() {
  const [horaSobra, setHoraSobra] = useState('');
  const [codigoMarca, setCodigoMarca] = useState('');
  const [isVolume, setIsVolume] = useState(false);
  const [outros, setOutros] = useState('');
  const [conteudoVolume, setConteudoVolume] = useState('');

  // Atualiza a hora automaticamente
  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
    setHoraSobra(formattedTime);
  }, []);

  const handleSubmit = () => {
    const formData = {
      horaSobra,
      codigoMarca,
      isVolume,
      conteudoVolume: isVolume ? conteudoVolume : null,
      outros: !isVolume ? outros : null
    };
    console.log('Dados enviados:', formData);
    alert('Registro salvo com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>HORA DA SOBRA</Text>
      <TextInput
        style={styles.input}
        value={horaSobra}
        editable={false}
      />

      <Text style={styles.label}>CÓDIGO/MARCA</Text>
      <TextInput
        style={styles.input}
        value={codigoMarca}
        onChangeText={setCodigoMarca}
        placeholder="Ex: 123 / Coca-Cola"
      />

      <Text style={styles.label}>DESCRIÇÃO</Text>
      
      {/* Opção Volume */}
      <View style={styles.optionContainer}>
        <View style={styles.checkboxContainer}>
          <Switch
            value={isVolume}
            onValueChange={setIsVolume}
            trackColor={{ false: '#767577', true: '#6200ee' }}
          />
          <Text style={styles.optionText}>Volume</Text>
        </View>
        
        {isVolume && (
          <TextInput
            style={styles.input}
            value={conteudoVolume}
            onChangeText={setConteudoVolume}
            placeholder="Conteúdo do volume (Ex: 500ml, 1L...)"
          />
        )}
      </View>

      {/* Opção Outros (só aparece se Volume não estiver selecionado) */}
      {!isVolume && (
        <View style={styles.optionContainer}>
          <TextInput
            style={[styles.input, { height: 80 }]}
            value={outros}
            onChangeText={setOutros}
            placeholder="Descreva a sobra (Ex: Garrafa quebrada, líquido derramado...)"
            multiline
          />
        </View>
      )}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>SALVAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  optionContainer: {
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});