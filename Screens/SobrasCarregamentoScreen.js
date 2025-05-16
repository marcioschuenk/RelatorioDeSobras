import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function SobrasCarregamentoScreen() {
  const [formData, setFormData] = useState({
    data: new Date().toLocaleDateString('pt-BR'), // Data atual por padrão
    codigo: '',
    quantidade: '',
    cancelado: '',
    descricao: '',
    local: '', // Local vazio por padrão
    ondeQual: '',
    quadrante: ''
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedField, setSelectedField] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.toLocaleDateString('pt-BR');
    setFormData(prev => ({...prev, data: formattedDate}));
    hideDatePicker();
  };

  const openModal = (type, items, field) => {
    setModalType(type);
    setOptions(items);
    setSelectedField(field);
    setModalVisible(true);
  };

  const handleSelectOption = (value) => {
    setFormData(prev => ({...prev, [selectedField]: value}));
    setModalVisible(false);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleSubmit = () => {
    console.log('Dados enviados:', formData);
    alert('Registro salvo com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Registro de Sobras do Carregamento</Text>
      
      <View style={styles.card}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Data</Text>
          <TouchableOpacity 
            style={styles.inputContainer}
            onPress={showDatePicker}
          >
            <MaterialIcons name="event" size={20} color="#4CAF50" style={styles.inputIcon} />
            <Text style={styles.input}>
              {formData.data || 'Selecione uma data'}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            locale="pt_BR"
            display="inline"
            isDarkModeEnabled={false}
            buttonTextColorIOS="#4CAF50"
            textColor="#212121"
            accentColor="#4CAF50"
            themeVariant="light"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Código/Marca</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons name="code" size={20} color="#4CAF50" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={formData.codigo}
              onChangeText={(text) => handleChange('codigo', text)}
              placeholder="Ex: 123456"
              placeholderTextColor="#9E9E9E"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Quantidade</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons name="format-list-numbered" size={20} color="#4CAF50" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={formData.quantidade}
              onChangeText={(text) => handleChange('quantidade', text)}
              keyboardType="numeric"
              placeholder="Ex: 5"
              placeholderTextColor="#9E9E9E"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Pedido cancelado?(Sim/Não)</Text>
          <TouchableOpacity
            style={styles.selectInput}
            onPress={() => openModal('Cancelado', ['Simm', 'Nãoo'], 'cancelado')}
          >
            <MaterialIcons name="cancel" size={20} color="#4CAF50" style={styles.inputIcon} />
            <Text style={styles.selectText}>
              {formData.cancelado || 'Selecione uma opção'}
            </Text>
            <MaterialIcons name="keyboard-arrow-down" size={20} color="#757575" />
          </TouchableOpacity>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Local</Text>
          <TouchableOpacity
            style={styles.selectInput}
            onPress={() => openModal('Local', ['Baiaa', 'Carrinhoo', 'Bancadaa', 'Ruaa'], 'local')}
          >
            <MaterialIcons name="location-on" size={20} color="#4CAF50" style={styles.inputIcon} />
            <Text style={styles.selectText}>{formData.local || 'Selecione uma opção'}</Text>
            <MaterialIcons name="keyboard-arrow-down" size={20} color="#757575" />
          </TouchableOpacity>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Onde/Qual?</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons name="pin-drop" size={20} color="#4CAF50" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={formData.ondeQual}
              onChangeText={(text) => handleChange('ondeQual', text)}
              placeholder="Ex: Baia 01, Rua G, Carrinho..."
              placeholderTextColor="#9E9E9E"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Quadrante/Local</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons name="grid-on" size={20} color="#4CAF50" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              value={formData.quadrante}
              onChangeText={(text) => handleChange('quadrante', text)}
              placeholder="Ex: Setor A, Ponto B"
              placeholderTextColor="#9E9E9E"
            />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Descrição</Text>
          <View style={[styles.inputContainer, styles.textAreaContainer]}>
            <MaterialIcons 
              name="description" 
              size={20} 
              color="#4CAF50" 
              style={[styles.inputIcon, styles.textAreaIcon]} 
            />
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.descricao}
              onChangeText={(text) => handleChange('descricao', text)}
              multiline
              placeholder="Descreva detalhadamente..."
              placeholderTextColor="#9E9E9E"
              textAlignVertical="top"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>SALVAR REGISTRO</Text>
        <MaterialIcons name="save" size={20} color="#FFFFFF" style={styles.buttonIcon} />
      </TouchableOpacity>

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
                  onPress={() => handleSelectOption(item)}
                >
                  <Text style={styles.modalOptionText}>{item}</Text>
                  {formData[selectedField] === item && (
                    <MaterialIcons name="check" size={20} color="#4CAF50" />
                  )}
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
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
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
    paddingVertical: 14,
  },
  textAreaContainer: {
    alignItems: 'flex-start',
    minHeight: 100,
  },
  inputIcon: {
    marginRight: 10,
  },
  textAreaIcon: {
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
    includeFontPadding: false,
  },
  selectInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  selectText: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
    marginLeft: 8,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 10,
    verticalAlign: 'top',
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    maxHeight: '70%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
    color: '#2E7D32',
  },
  modalOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#424242',
  },
  modalCancelButton: {
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  modalCancelText: {
    color: '#E53935',
    fontWeight: '600',
  },
});
