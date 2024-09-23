import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet, Button, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('masculino');
  const [limit, setLimit] = useState(1000);
  const [isStudent, setIsStudent] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Função para reiniciar os valores do formulário
  const resetForm = () => {
    setName('');
    setAge('');
    setGender('masculino');
    setLimit(1000);
    setIsStudent(false);
    setShowResult(false);
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = () => {
    // Verifica se os campos estão vazios
    if (!name || !age) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    // Exibir os dados e mostrar o alerta de sucesso
    setShowResult(true);
    Alert.alert('Sucesso', 'Dados enviados com sucesso!');

    // Reiniciar o formulário após exibir os dados por alguns segundos
    setTimeout(() => {
      resetForm();
    }, 3000); // Tempo de 3 segundos para exibir o resultado antes de resetar
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Formulário do Banco</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text style={styles.label}>Sexo:</Text>
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Masculino" value="masculino" />
        <Picker.Item label="Feminino" value="feminino" />
      </Picker>

      <Text style={styles.label}>Limite:</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={5000}
        step={100}
        value={limit}
        onValueChange={(value) => setLimit(value)}
      />
      <Text style={styles.sliderValue}>R$ {limit.toFixed(2)}</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Estudante:</Text>
        <Switch
          value={isStudent}
          onValueChange={(value) => setIsStudent(value)}
        />
      </View>

      <Button title="Enviar" onPress={handleSubmit} />

      {showResult && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Nome: {name}</Text>
          <Text style={styles.resultText}>Idade: {age}</Text>
          <Text style={styles.resultText}>Sexo: {gender}</Text>
          <Text style={styles.resultText}>Limite: R$ {limit.toFixed(2)}</Text>
          <Text style={styles.resultText}>
            Estudante: {isStudent ? 'Sim' : 'Não'}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderValue: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
    color: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  result: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  resultText: {
    fontSize: 16,
    marginVertical: 5,
  },
});
