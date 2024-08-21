import React from 'react'
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native'

const Calculadora = function () {
  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [result, setResult] = React.useState('');

  const sum = function () {
    if (firstNumber != '' && secondNumber != '')
      setResult(parseFloat(firstNumber) + parseFloat(secondNumber))
    else
      setResult('Digite os valores, por favor')
  }

  const subtract = function () {
    if (firstNumber != '' && secondNumber != '')
      setResult(firstNumber - secondNumber)
    else
      setResult('Digite os valores, por favor')
  }

  const divide = function () {
    if (parseFloat(secondNumber) === 0)
      setResult('Não é possível fazer divisão por zero')
    else if (firstNumber != '' && secondNumber != '')
      setResult(firstNumber / secondNumber)
    else
      setResult('Digite os valores, por favor')
  }

  const multiply = function () {
    if (firstNumber != '' && secondNumber != '')
      setResult(firstNumber * secondNumber)
    else
      setResult('Digite os valores, por favor')
  }

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Calculadora</Text>

      <View style={styles.inputView}>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='Valor 1' value={firstNumber} onChangeText={setFirstNumber} />
        <TextInput style={styles.input}keyboardType='numeric' placeholder='Valor 2' value={secondNumber} onChangeText={setSecondNumber} />
      </View>

      <View style={styles.buttonView}>
        <Pressable onPress={sum}><Text>+</Text></Pressable>
        <Pressable onPress={subtract}><Text>-</Text></Pressable>
        <Pressable onPress={multiply}><Text>x</Text></Pressable>
        <Pressable onPress={divide}><Text>/</Text></Pressable>
      </View>
      
      <Text>{result}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    gap: 20,
  },

  inputView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
  },

  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },

  input: {
    backgroundColor: '#b5b5b5',
    margin: 10,
    height: 50,
    textAlign: 'center',
    borderRadius: 10,
    width: '40%',
  },
});

export default Calculadora;