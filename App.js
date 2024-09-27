import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; // Import useState
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, Image, View, Text } from 'react-native';

// Component for Name Input
const NameInput = () => {
  const [name, setName] = useState(''); // State for the name

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MEsenbecov!</Text>
      <Image style={styles.image} source={require('./assets/image.png')} />
      <TextInput
        style={styles.input}
        placeholder="Введите данные"
        onChangeText={(value) => setName(value)} // Update state
      />
      <Text style={styles.text}>
        Вы зарегистрированы как: {name ? name : 'незарегистрированный пользователь'}
      </Text>
    </View>
  );
};

// Component for Function Calculation
const FunctionCalculator = () => {
  const [x, setX] = useState(''); // State for x
  const [result, setResult] = useState(null); // State for result

  // Function: f(x) = x^2
  const calculateFunction = () => {
    const numX = parseFloat(x); // Convert input to number
    if (isNaN(numX)) {
      Alert.alert("Ошибка", "Введите корректное значение для x");
      return;
    }
    const res = Math.pow(numX, 2); // Calculate f(x) = x^2
    setResult(res); // Save result
    Alert.alert("Результат", `f(x) = ${res}`); // Show result in alert
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: 'https://latex.codecogs.com/png.latex?f(x)%3D%5Ex2' }}
        style={styles.image}
      />
      <Text style={styles.label}>Введите значение x:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setX(text)}
        value={x}
        keyboardType="numeric"
        placeholder="Введите x"
      />
      <View style={styles.button}>
        <Button title="Рассчитать" onPress={calculateFunction} />
      </View>
      {result !== null && <Text style={styles.resultText}>Результат: f(x) = {result}</Text>}
    </SafeAreaView>
  );
};

// Main App Component
export default function App() {
  return (
    <View style={styles.appContainer}>
      <NameInput />
      <FunctionCalculator />
      <StatusBar style="auto" />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  image: {
    marginBottom: 20,
    width: 100,
    height: 100,
  },
  input: {
    margin: 10,
    borderWidth: 3,
    width: 200,
    height: 40,
    borderColor: '#555',
    borderRadius: 15,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
  },
  resultText: {
    marginTop: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
});
