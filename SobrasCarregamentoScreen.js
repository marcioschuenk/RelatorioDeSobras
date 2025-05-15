import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, FlatList } from 'react-native';

export default function SobrasCarregamentoScreen() {
  const [codigo, setCodigo] = useState('');
  const [data, setData] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [cancelado, setCancelado] = useState('Não');
  const [descricao, setDescricao] = useState('');
  const [local, setLocal] = useState('Baia');
  const [ondeQual, setOndeQual] = useState('');
  const [quadrante, setQuadrante] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [options, setOptions] = useState([]);
  const [onSelectOption, setOnSelectOption] = useState(() => () => {});

  const openModal = (type, items, onSelect) => {
    setModalType(type);
    setOptions(items);
    setOnSelectOption(() => onSelect);
    setModalVisible(true);
  };

  const handleSubmit = () => {
    const formData = {
      codigo,
      data,
      quantidade,
      cancelado,
      descricao,
      local,
      ondeQual,
      quadrante,
    };
    console.log('Dados enviados:', formData);
    // Adicione aqui a lógica para enviar os dados
    alert('Dados salvos com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Registro de Sobras</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Código</Text>
        <TextInput
          style={styles.input}
          value={codigo}
          onChangeText={setCodigo}
          placeholder="Digite o código (Ex: 001)"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          value={data}
          onChangeText={setData}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Quantidade</Text>
        <TextInput
          style={styles.input}
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
          placeholder="Quantidade (Ex: 5)"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Pedido foi cancelado?</Text>
        <TouchableOpacity
          style={styles.selectInput}
          onPress={() =>
            openModal('Cancelado', ['Sim', 'Não'], (value) => setCancelado(value))
          }
        >
          <Text style={styles.selectText}>{cancelado}</Text>
          <Text style={styles.selectIcon}>▼</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={descricao}
          onChangeText={setDescricao}
          multiline
          placeholder="Descreva detalhadamente a sobra..."
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Local</Text>
        <TouchableOpacity
          style={styles.selectInput}
          onPress={() =>
            openModal('Local', ['Baia', 'Carrinho', 'Bancada', 'Rua'], (value) => setLocal(value))
          }
        >
          <Text style={styles.selectText}>{local}</Text>
          <Text style={styles.selectIcon}>▼</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Onde/Qual?</Text>
        <TextInput
          style={styles.input}
          value={ondeQual}
          onChangeText={setOndeQual}
          placeholder="Ex: Carrinho 3, Baia 2..."
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Quadrante/Local</Text>
        <TextInput
          style={styles.input}
          value={quadrante}
          onChangeText={setQuadrante}
          placeholder="Ex: Setor A, Ponto X..."
          placeholderTextColor="#999"
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>SALVAR REGISTRO</Text>
      </TouchableOpacity>

      {/* Modal de seleção */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Selecionar {modalType}</Text>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => {
                    onSelectOption(item);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modalOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity 
              style={styles.modalCancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#34495e',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dfe6e9',
    fontSize: 16,
    color: '#2d3436',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  selectInput: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dfe6e9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  selectText: {
    fontSize: 16,
    color: '#2d3436',
  },
  selectIcon: {
    color: '#7f8c8d',
    fontSize: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#3498db',
    padding: 18,
    borderRadius: 8,
    marginTop: 25,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#2980b9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    maxHeight: '70%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#2c3e50',
  },
  modalOption: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomColor: '#ecf0f1',
    borderBottomWidth: 1,
  },
  modalOptionText: {
    fontSize: 16,
    color: '#34495e',
  },
  modalCancelButton: {
    marginTop: 15,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#f1f2f6',
  },
  modalCancelText: {
    textAlign: 'center',
    color: '#e74c3c',
    fontWeight: '600',
  },
});